import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonField = styled(Button)`
	text-transform: capitalize;
	box-shadow: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	height: 45px;

	&.fill {
		color: white;
	}

	&.outline {
		color: ${props => props.theme.palette.color.text.primary};
	}

	&.primary.fill {
		background: ${props => props.theme.palette.color.primary};
	}

	&.danger.fill {
		background: ${props => props.theme.palette.color.DarkRed};
	}

	&.warning.fill {
		background: ${props => props.theme.palette.color.darkYellow};
	}

	&.success.fill {
		background: ${props => props.theme.palette.color.DarkGreen};
	}

	&.disabled.fill {
		background: ${props => props.theme.palette.color.background.disabled};
		color: ${props => props.theme.palette.color.text.disabled};
		cursor: not-allowed;
	}

	&.primary.outline {
		border: 2px solid ${props => props.theme.palette.color.primary};
	}

	&.danger.outline {
		border: 2px solid ${props => props.theme.palette.color.DarkRed};
	}

	&.warning.outline {
		border: 2px solid ${props => props.theme.palette.color.darkYellow};
	}

	&.success.outline {
		border: 2px solid ${props => props.theme.palette.color.DarkGreen};
	}

	&.disabled.outline {
		border: 2px solid ${props => props.theme.palette.color.background.disabled};
		color: ${props => props.theme.palette.color.text.disabled};
		cursor: not-allowed;
	}

	&.primary.text {
		color: ${props => props.theme.palette.color.primary};
	}

	&.danger.text {
		color: ${props => props.theme.palette.color.DarkRed};
	}

	&.warning.text {
		color: ${props => props.theme.palette.color.darkYellow};
	}

	&.success.text {
		color: ${props => props.theme.palette.color.DarkGreen};
	}

	&.disabled.text {
		color: ${props => props.theme.palette.color.text.disabled};
		cursor: not-allowed;
	}

	&.haveShadow {
		box-shadow: #0560fc 0px 3px 30px 0px;
	}

	&.rounded {
		border-radius: ${props => props.theme.palette.borderRadius.button};
	}

	&.circle {
		border-radius: 500px;
	}

	&.sharp {
		border-radius: 0;
	}
`;
