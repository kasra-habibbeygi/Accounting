//types
import type { AppProps } from 'next/app';
import type { FC } from 'react';

//mui
import { ThemeProvider } from '@emotion/react';

//config
import Theme from '../configs/theme';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={Theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
