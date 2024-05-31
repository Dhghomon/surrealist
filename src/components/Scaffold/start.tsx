import { Box, Center, Group, Stack, UnstyledButton } from "@mantine/core";
import { adapter } from "~/adapter";
import primarySphere from "~/assets/images/primary-sphere.webp";
import secondarySphere from "~/assets/images/secondary-sphere.webp";
import cloud from "~/assets/images/start/cloud.webp";
import connection from "~/assets/images/start/connection.webp";
import sandbox from "~/assets/images/start/sandbox.webp";
import { SANDBOX } from "~/constants";
import { useStable } from "~/hooks/stable";
import { useConfigStore } from "~/stores/config";
import { useDatabaseStore } from "~/stores/database";
import { useInterfaceStore } from "~/stores/interface";
import classes from "./style.module.scss";

export function StartScreen() {
	const { setActiveConnection } = useConfigStore.getState();
	const { openConnectionCreator } = useInterfaceStore.getState();
	const { isConnecting } = useDatabaseStore();

	const openSandbox = useStable(() => {
		setActiveConnection(SANDBOX);
	});

	const openCloud = useStable(() => {
		adapter.openUrl("https://surrealdb.com/cloud");
	});

	return (
		<Box pos="absolute" inset={0} className={classes.start}>
			<div
				className={classes.primarySphere}
				style={{
					backgroundImage: `url(${primarySphere})`,
				}}
			/>

			<div
				className={classes.secondarySphere}
				style={{
					backgroundImage: `url(${secondarySphere})`,
				}}
			/>

			<Center h="100%">
				<Group align="stretch">
					<Stack>
						<UnstyledButton
							className={classes.startBox}
							w={320}
							h={226}
							onClick={openConnectionCreator}
							style={{ border: "1px solid rgba(255, 255, 255, 0.05" }}
						>
							<Box style={{ backgroundImage: `url(${connection})` }} />
						</UnstyledButton>
						<UnstyledButton
							className={classes.startBox}
							w={320}
							h={226}
							onClick={openSandbox}
							style={{ border: "1px solid rgba(255, 255, 255, 0.05" }}
							disabled={isConnecting}
						>
							<Box style={{ backgroundImage: `url(${sandbox})` }} />
						</UnstyledButton>
					</Stack>
					<Box>
						<UnstyledButton
							className={classes.startBox}
							w={657}
							h={464}
							onClick={openCloud}
							disabled={isConnecting}
						>
							<Box style={{ backgroundImage: `url(${cloud})` }} />
						</UnstyledButton>
					</Box>
				</Group>
			</Center>
		</Box>
	);
}
