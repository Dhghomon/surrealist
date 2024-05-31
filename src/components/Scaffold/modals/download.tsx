import {
	ActionIcon,
	Button,
	Image,
	List,
	Modal,
	Stack,
	Text,
} from "@mantine/core";
import banner from "~/assets/images/desktop.webp";
import { Icon } from "~/components/Icon";
import { useIntent } from "~/hooks/url";
import { iconArrowUpRight, iconCircleFilled, iconClose } from "~/util/icons";

export interface DownloadModalProps {
	opened: boolean;
	onClose: () => void;
	onOpen: () => void;
}

export function DownloadModal({ opened, onClose, onOpen }: DownloadModalProps) {
	useIntent("download-app", () => onOpen());

	return (
		<Modal opened={opened} onClose={onClose} size={475} padding={0}>
			<ActionIcon
				pos="absolute"
				top={16}
				right={16}
				onClick={onClose}
				aria-label="Close modal"
			>
				<Icon path={iconClose} />
			</ActionIcon>

			<Image src={banner} />

			<Stack p={24}>
				<Text size="lg">
					Take your SurrealDB journey to the next level with Surrealist Desktop
					and gain advanced capabilities designed for an optimized experience.
				</Text>

				<List fz="lg" icon={<Icon path={iconCircleFilled} color="surreal" />}>
					<List.Item>Access Surrealist in offline environments</List.Item>
					<List.Item>
						Launch your local database directly from Surrealist
					</List.Item>
				</List>

				<Button
					mt="lg"
					variant="gradient"
					component="a"
					rightSection={<Icon path={iconArrowUpRight} />}
					onClick={onClose}
					fullWidth
					href="https://github.com/surrealdb/surrealist/releases"
					target="_blank"
				>
					Download
				</Button>
			</Stack>
		</Modal>
	);
}
