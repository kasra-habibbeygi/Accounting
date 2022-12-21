import { PaletteMode } from '@mui/material';

const theme = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					blue: 'blue',
			  }
			: {
					blue: 'red',
			  }),
	},
});

export default theme;
