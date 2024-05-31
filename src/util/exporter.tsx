import { executeQueryFirst, executeQuerySingle } from "~/connection";
import { ExportType } from "~/constants";
import { useDatabaseStore } from "~/stores/database";
import { SchemaInfoTB } from "~/types";
import { tb } from "./helpers";
import { isEdgeTable, syncDatabaseSchema } from "./schema";
import { formatValue } from "./surrealql";

/**
 * Export the database schema and save it to a file
 */
export async function createDatabaseExport(types: ExportType[]) {
	await syncDatabaseSchema();

	const definitions = await executeQuerySingle("INFO FOR DB");

	const dbTables = Object.entries(definitions.tables);
	const dbParams = Object.values(definitions.params);
	const dbAnalyzers = Object.values(definitions.analyzers);
	const dbFunctions = Object.values(definitions.functions);
	const dbScopes = Object.values(definitions.scopes);

	const output: string[] = [];

	function pushSection(title: string) {
		output.push(
			"",
			"-- ------------------------------",
			"-- " + title,
			"-- ------------------------------",
			"",
		);
	}

	pushSection(
		"-- Export generated by Surrealist on " + new Date().toISOString(),
	);

	// Define options
	pushSection("OPTION");

	output.push("OPTION IMPORT;");

	// Include analyzers
	if (types.includes("analyzers") && dbAnalyzers.length > 0) {
		pushSection("ANALYZERS");

		for (const analyzerDef of dbAnalyzers) {
			output.push(`${analyzerDef};`);
		}
	}

	// Include functions
	if (types.includes("functions") && dbFunctions.length > 0) {
		pushSection("FUNCTIONS");

		for (const funcDef of dbFunctions) {
			output.push(`${funcDef};`);
		}
	}

	// Include params
	if (types.includes("params") && dbParams.length > 0) {
		pushSection("PARAMS");

		for (const paramDef of dbParams) {
			output.push(`${paramDef};`);
		}
	}

	// Include scopes
	if (types.includes("scopes") && dbScopes.length > 0) {
		pushSection("SCOPES");

		for (const scopeDef of dbScopes) {
			output.push(`${scopeDef};`);
		}
	}

	// Include table schemas
	if (types.includes("tables")) {
		for (const [tableName, definition] of dbTables) {
			pushSection(`TABLE: ${tableName}`);

			output.push(`${definition};`);

			const tbInfo = await executeQuerySingle<SchemaInfoTB>(
				`INFO FOR TABLE ${tb(tableName)}`,
			);

			const tbFields = Object.values(tbInfo.fields);
			const tbIndexes = Object.values(tbInfo.indexes);
			const tbEvents = Object.values(tbInfo.events);

			if (tbFields.length > 0) {
				output.push("");

				for (const fieldDef of tbFields) {
					output.push(`${fieldDef};`);
				}
			}

			if (tbIndexes.length > 0) {
				output.push("");

				for (const indexDef of tbIndexes) {
					output.push(`${indexDef};`);
				}
			}

			if (tbEvents.length > 0) {
				output.push("");

				for (const eventDef of tbEvents) {
					output.push(`${eventDef};`);
				}
			}
		}
	}

	// Include table data
	if (types.includes("records")) {
		pushSection("TRANSACTION");

		output.push("BEGIN TRANSACTION;");

		for (const [tableName] of dbTables) {
			const tbRows = await executeQueryFirst(`SELECT * FROM ${tb(tableName)}`);
			const info = useDatabaseStore
				.getState()
				.databaseSchema.tables.find((t) => t.schema.name === tableName);

			if (tbRows.length > 0 && info) {
				pushSection(`TABLE DATA: ${tableName}`);

				const isEdge = isEdgeTable(info);

				for (const row of tbRows) {
					const content = formatValue(row);
					const id = formatValue(row.id);

					if (isEdge) {
						const inVal = formatValue(row.in);
						const outVal = formatValue(row.out);

						output.push(
							`RELATE ${inVal} -> ${id} -> ${outVal} CONTENT ${content};`,
						);
					} else {
						output.push(`UPDATE ${id} CONTENT ${content};`);
					}
				}
			}
		}

		pushSection("TRANSACTION");

		output.push("COMMIT TRANSACTION;");
	}

	return output.join("\n");
}
