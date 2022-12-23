import { FC } from 'react';

//assets
import * as S from './input.style';

export interface InputProps {
	name: string;
	value: string;
	getInputValue: Function;
	label?: string;
	icon?: string;
	placeholder?: string;
	type?: 'text' | 'password';
	extraClass?: string;
}

export const Input: FC<InputProps> = ({ name, value, getInputValue, label, icon, placeholder, type = 'text', extraClass }) => {
	return (
		<S.InputField className={extraClass}>
			<label htmlFor={name}>{label}</label>
			{icon ? (
				<div className='input_field'>
					<i className={icon}></i>
					<input
						type={type}
						id={name}
						name={name}
						onChange={e => getInputValue(e)}
						placeholder={placeholder}
						value={value}
						autoComplete='off'
					/>
				</div>
			) : (
				<input
					type={type}
					id={name}
					name={name}
					onChange={e => getInputValue(e)}
					placeholder={placeholder}
					value={value}
					autoComplete='off'
				/>
			)}
		</S.InputField>
	);
};
