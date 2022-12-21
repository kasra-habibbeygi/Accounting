import '@emotion/react';

declare module '@emotion/react' {
	interface Theme {
		palette: {
			blue: string;
			red: string;
		};
	}
}

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			blue: string;
			red: string;
		};
	}
}
