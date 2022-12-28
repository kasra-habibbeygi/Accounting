import { StoriesThemeProvider } from './stories-theme-provider';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		title: 'Theme',
		description: 'Theme for your components',
		defaultValue: 'light',
		toolbar: {
			icon: 'paintbrush',
			dynamicTitle: true,
			items: [
				{ value: 'light', left: '☀️', title: 'Light mode' },
				{ value: 'dark', left: '🌙', title: 'Dark mode' },
			],
		},
	},
};

export const decorators = [StoriesThemeProvider];
