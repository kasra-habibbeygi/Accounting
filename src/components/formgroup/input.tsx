import { FC } from 'react';

//assets
import * as S from './input.style';

// utiils
import Finance from '../../utils/finance';

export interface InputProps {
	name: string;
	value: string;
	getInputValue: Function;
	label?: string;
	icon?: string;
	placeholder?: string;
	type?: 'text' | 'password';
}

export const Input: FC<InputProps> = ({ name, value, getInputValue, label, icon, placeholder, type = 'text' }) => {
	const randomNumber = Finance.RandomNumberGenerator(1000, 1);

	return (
		<S.InputField>
			<label htmlFor={`${name}_${randomNumber}`}>{label}</label>
			<input
				type={type}
				id={`${name}_${randomNumber}`}
				name={name}
				onChange={e => getInputValue(e)}
				placeholder={placeholder}
				value={value}
			/>
		</S.InputField>
	);
};
