import '@emotion/react';

declare module '@emotion/react' {
	interface Theme {
		mode: string;
		palette: {
			color: {
				primary: string;
				secondary: string;
				darkYellow: string;
				DarkRed: string;
				DarkGreen: string;
				lightYellow: string;
				lightRed: string;
				lightGreen: string;
				border: string;

				text: {
					primary: string;
					secondary: string;
					disabled: string;
				};

				background: {
					primary: string;
					secondary: string;
					disabled: string;
				};
			};
			borderRadius: {
				input: string;
				container: string;
				button: string;
			};
		};
	}
}

declare module '@mui/material/styles' {
	interface Theme {
		mode: string;
		palette: {
			color: {
				primary: string;
				secondary: string;
				darkYellow: string;
				DarkRed: string;
				DarkGreen: string;
				lightYellow: string;
				lightRed: string;
				lightGreen: string;
				border: string;

				text: {
					primary: string;
					secondary: string;
					disabled: string;
				};

				background: {
					primary: string;
					secondary: string;
					disabled: string;
				};
			};
			borderRadius: {
				input: string;
				container: string;
				button: string;
			};
		};
	}
}
