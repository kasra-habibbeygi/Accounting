import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

//config
import { theme } from '../configs/theme';

//assets
import '../assets/styles/globals/general.css';
import '../assets/styles/globals/fontawsome.css';

//component
import LayoutProvider from '../components/layout/layout.provider';

const darkModeTheme = createTheme(theme('light'));

const App: FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
	const notAsideMenuRequired: string[] = ['/register', '/login'];

	return (
		<ThemeProvider theme={darkModeTheme}>
			<Toaster
				position='bottom-right'
				containerStyle={{
					zIndex: 9999,
				}}
			/>
			<LayoutProvider asideStatus={notAsideMenuRequired.includes(router.pathname)}>
				<Component {...pageProps} />
			</LayoutProvider>
		</ThemeProvider>
	);
};

export default App;
