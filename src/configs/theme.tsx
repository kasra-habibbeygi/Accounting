import { PaletteMode } from '@mui/material';

export const theme = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					color: {
						primary: '#0560FC',
						secondary: '',
						darkYellow: '',
						DarkRed: '#F22837',
						DarkGreen: '#28B116',
						lightYellow: '',
						lightRed: '#FEEAEB',
						lightGreen: '#EAF7E8',
						border: '',

						text: {
							primary: '#212325',
							secondary: '#A0A6B1',
							disabled: '#676D7C',
						},

						background: {
							primary: '#F6F8FA',
							secondary: '#F9FCFE',
							disabled: '#E5EAEF',
						},
					},
					borderRadius: {
						input: '4px',
						container: '6px',
						button: '10px',
					},
			  }
			: {
					color: {
						primary: '#055FFC',
						secondary: '',
						darkYellow: '',
						DarkRed: '#F22837',
						DarkGreen: '#28B116',
						lightYellow: '',
						lightRed: '#FEEAEB',
						lightGreen: '#EAF7E8',
						border: '',

						text: {
							primary: '#FCFCFC',
							secondary: '#A0A6B1',
							disabled: '#676D7C',
						},

						background: {
							primary: '#17193E',
							secondary: '#131130',
							disabled: '#E5EAEF',
						},
					},
					borderRadius: {
						input: '4px',
						container: '6px',
						button: '10px',
					},
			  }),
	},
});
