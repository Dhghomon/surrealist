import { Text } from "@mantine/core";
import { Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { adapter } from "~/adapter";
import { VIEW_MODES } from "~/constants";
import { actions, store } from "~/store";

export function updateTitle() {
	const { activeTab, isPinned, config } = store.getState();

	let title = '';

	if (activeTab) {
		const tab = config.tabs.find(t => t.id === activeTab);

		if (tab) {
			const viewInfo = VIEW_MODES.find(v => v.id === tab.activeView);

			title += `${tab.name} - Surrealist ${viewInfo?.name}`;
		}
	}

	if (isPinned) {
		title += ' (Pinned)';
	}

	adapter.setWindowTitle(title);
}

/**
 * Update the config on disk with the current state of the app
 */
export async function updateConfig() {
	return adapter.saveConfig(JSON.stringify(store.getState().config));
}

/**
 * Apply the current zoom level to the document
 */
export function updateZoom() {
	const zoom = store.getState().config.zoomLevel;

	(document.documentElement.style as any).zoom = `${zoom}`;
}

/**
 * Watch for changes to the native theme
 */
export function watchNativeTheme() {
	const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)');

	store.dispatch(actions.setNativeTheme(mediaMatch.matches ? 'dark' : 'light'));

	mediaMatch.addEventListener('change', event => {
		store.dispatch(actions.setNativeTheme(event.matches ? 'dark' : 'light'));
	});
}

/**
 * Display an error notification
 * 
 * @param title The title message
 * @param subtitle The subtitle message
 */
export function showError(title: string, subtitle: string) {
	showNotification({
		color: 'red.6',
		message: (
			<Stack spacing={0}>
				<Text weight={600}>
					{title}
				</Text>
				<Text color="light.5">
					{subtitle}
				</Text>
			</Stack>
		)
	});
}

/**
 * Print a log message to the console
 * 
 * @param label The label to use
 * @param color The color to use
 * @param message The message to print
 */
export function printLog(label: string, color: string, ...message: any[]) {
	console.log(`%c${label}:`, `color: ${color}; font-weight: bold`, ...message);
}

/**
 * Returns the mod of the given numbers, even if the result is negative
 * 
 * @param n The number to mod
 * @param m The mod
 */
export function mod(n: number, m: number) {
	return ((n % m) + m) % m;
}