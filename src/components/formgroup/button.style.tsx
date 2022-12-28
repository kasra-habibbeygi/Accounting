import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonField = styled(Button)(props => ({
	textTransform: 'capitalize',
	boxShadow: 'none',
	display: 'flex',
	aligntems: 'center',
	justifyContent: 'center',
	gap: '8px',
	height: '45px',

	'&.fill': {
		color: 'white',
	},

	'&.outline': {
		color: props.theme.palette.color.text.primary,
	},

	'&.primary.fill': {
		background: props.theme.palette.color.primary,
	},

	'&.danger.fill': {
		background: props.theme.palette.color.DarkRed,
	},

	'&.warning.fill': {
		background: props.theme.palette.color.darkYellow,
	},

	'&.success.fill': {
		background: props.theme.palette.color.DarkGreen,
	},

	'&.disabled.fill': {
		background: props.theme.palette.color.background.disabled,
		color: props.theme.palette.color.text.disabled,
		cursor: 'not-allowed',
	},

	'&.primary.outline': {
		border: `2px solid ${props.theme.palette.color.primary}`,
	},

	'&.danger.outline': {
		border: `2px solid ${props.theme.palette.color.DarkRed}`,
	},

	'&.warning.outline': {
		border: `2px solid ${props.theme.palette.color.darkYellow}`,
	},

	'&.success.outline': {
		border: `2px solid ${props.theme.palette.color.DarkGreen}`,
	},

	'&.disabled.outline': {
		border: `2px solid ${props.theme.palette.color.background.disabled}`,
		color: props.theme.palette.color.text.disabled,
		cursor: 'not-allowed',
	},

	'&.primary.text': {
		color: props.theme.palette.color.primary,
	},

	'&.danger.text': {
		color: props.theme.palette.color.DarkRed,
	},

	'&.warning.text': {
		color: props.theme.palette.color.darkYellow,
	},

	'&.success.text': {
		color: props.theme.palette.color.DarkGreen,
	},

	'&.disabled.text': {
		color: props.theme.palette.color.text.disabled,
		cursor: 'not-allowed',
	},

	'&.haveShadow': {
		boxShadow: '#0560fc 0px 3px 30px 0px',
	},

	'&.rounded': {
		borderRadius: props.theme.palette.borderRadius.buttom,
	},

	'&.circle': {
		borderRadius: '500px',
	},

	'&.sharp': {
		borderRadius: 0,
	},
}));
