import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { theme } from '../src/configs/theme';

export const StoriesThemeProvider = Story => {
	const darkModeTheme = createTheme(theme('light'));

	return (
		<ThemeProvider theme={darkModeTheme}>
			<Story />
		</ThemeProvider>
	);
};
