import { FC } from 'react';

//assets
import * as S from './button.style';
import Checkbox from '@mui/material/Checkbox';

export interface ButtonProps {
	text: string;
	functionality: Function;
	variant?: 'fill' | 'outline' | 'text';
	icon?: string;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Button: FC<ButtonProps> = ({ text, functionality, variant, icon }) => {
	return (
		<S.ButtonField>
			<Checkbox {...label} defaultChecked />
		</S.ButtonField>
	);
};
