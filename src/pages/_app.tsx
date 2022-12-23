import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

//config
import { theme } from '../configs/theme';

//assets
import '../assets/styles/globals/general.css';
import '../assets/styles/globals/fontawsome.css';

const darkModeTheme = createTheme(theme('light'));

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={darkModeTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
