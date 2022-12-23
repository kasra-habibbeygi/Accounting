import { FC } from 'react';

//assets
import * as S from './button.style';

export interface ButtonProps {
	text: string;
	functionality: Function;
	type?: 'fill' | 'outline' | 'text';
	color?: 'primary' | 'danger' | 'warning' | 'success' | 'disabled';
	icon?: string;
	shadow?: boolean;
	disabled?: boolean;
	borderRadius?: 'rounded' | 'circle' | 'sharp';
	extraClass?: string;
}

export const Button: FC<ButtonProps> = ({
	text,
	functionality,
	icon,
	type = 'fill',
	color = 'primary',
	shadow = false,
	disabled = false,
	borderRadius = 'rounded',
	extraClass,
}) => {
	return (
		<S.ButtonField
			className={`${type} ${color} ${shadow ? 'haveShadow' : ''} ${disabled ? 'disabled' : ''} ${borderRadius} ${extraClass}`}
			onClick={() => functionality()}
		>
			{icon && <i className={icon}></i>} {text}
		</S.ButtonField>
	);
};
