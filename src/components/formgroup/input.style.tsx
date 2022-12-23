import styled from '@emotion/styled';

export const InputField = styled.div(props => ({
	input: {
		color: props.theme.palette.color.text.primary,
		borderRadius: '500px',
		backgroundColor: '#00000042',
		border: 'none',
		height: '52px',
		padding: '0px 20px',
		width: '100%',
		fontSize: '1rem',
	},

	'& .input_field': {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',

		input: {
			paddingLeft: '50px',
		},

		i: {
			position: 'absolute',
			color: props.theme.palette.color.text.secondary,
			fontSize: '1.3rem',
			left: '16px',
		},
	},
}));
