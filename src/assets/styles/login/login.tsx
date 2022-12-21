import styled from '@emotion/styled';

type ImageProps = {
	background: string;
};

export const Mainfield = styled.section<ImageProps>(props => ({
	width: '100%',
	height: '100vh',
	background: `url(${props.background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'&::after': {
		content: '""',
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		background: 'rgb(0 0 0 / 0%)',
		backdropFilter: 'blur( 20px )',
		display: 'block',
		zIndex: '1',
	},
}));

export const LoginFormField = styled.div(props => ({
	position: 'relative',
	zIndex: '2',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',

	img: {
		width: '80px',
		filter: 'drop-shadow(5px 5px 5px #00000040)',
	},

	h3: {
		fontSize: '2.5rem',
		color: 'white',
	},

	small: {
		fontSize: '1.2rem',
		color: 'white',
		fontWeight: '300',
	},

	'& .formGroup': {
		width: '350px',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		marginTop: '60px',
	},
}));
