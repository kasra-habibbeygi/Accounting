import styled from '@emotion/styled';

export const DashboardMainField = styled.main(props => ({
	display: 'flex',
	gap: '40px',
}));

export const AsideMainField = styled.div(props => ({
	position: 'relative',
	width: '300px',
}));

export const AsideInsideField = styled.aside(props => ({
	padding: '50px 30px 20px 30px',

	ul: {
		listStyle: 'none',
		width: '100%',
	},
}));

export const AsideItems = styled.li(props => ({
	width: '100%',
	marginBottom: '10px',

	a: {
		display: 'flex',
		alignItems: 'center',
		gap: '20px',
		color: props.theme.palette.color.text.secondary,
		width: '100%',
		padding: '15px 20px',
		borderRadius: props.theme.palette.borderRadius.buttom,

		'&.active': {
			backgroundColor: props.theme.palette.color.primary,
			color: 'white',
		},

		p: {
			fontWeight: 'bold',
		},
	},
}));
