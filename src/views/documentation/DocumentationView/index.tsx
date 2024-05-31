import { Group } from "@mantine/core";
import { useMemo, useRef, useState } from "react";
import { buildDocumentation } from "~/docs";
import { useSetting } from "~/hooks/config";
import { useSchema } from "~/hooks/schema";
import { useViewEffect } from "~/hooks/view";
import { syncDatabaseSchema } from "~/util/schema";
import { ArticlePane } from "../ArticlePane";
import { TocPane } from "../TopicsPane";

export function DocumentationView() {
	const [language, setLanguage] = useSetting("behavior", "docsLanguage");

	const schema = useSchema();
	const scrollRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState("");

	const docs = useMemo(
		() => (schema ? buildDocumentation(schema) : []),
		[schema],
	);

	useViewEffect("documentation", () => {
		syncDatabaseSchema();
	});

	return (
		<>
			<Group h="100%" wrap="nowrap" gap="var(--surrealist-divider-size)">
				<TocPane
					active={active}
					docs={docs}
					language={language}
					scrollRef={scrollRef}
				/>
				<ArticlePane
					docs={docs}
					language={language}
					scrollRef={scrollRef}
					onLanguageChange={setLanguage}
					onChangeActiveTopic={setActive}
				/>
			</Group>
		</>
	);
}

export default DocumentationView;
