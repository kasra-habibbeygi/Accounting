//types
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { ThemeProvider } from '@emotion/react';

//config
import Theme from '../configs/theme';

//assets
import '../assets/styles/globals/general.css';
import '../assets/styles/globals/fontawsome.css';
import { createTheme } from '@mui/material/styles';

const darkModeTheme = createTheme(Theme('dark'));

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={darkModeTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
