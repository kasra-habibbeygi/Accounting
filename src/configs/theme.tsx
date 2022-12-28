export const theme = (mode: 'light' | 'dark') => ({
	palette: {
		mode,
		borderRadius: {
			input: '4px',
			container: '10px',
			buttom: '10px',
		},
		padding: {
			container: '15px',
		},
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
							secondary: '#676D7C',
							disabled: '#676D7C',
						},
						background: {
							primary: '#F6F8FA',
							secondary: '#F9FCFE',
							disabled: '#E5EAEF',
						},
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
			  }),
	},
});
