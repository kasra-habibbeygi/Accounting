import { FC, useState } from 'react';
import Link from 'next/link';

//assets
import * as S from '../assets/styles/auth/auth';
import LoginBackground from '../assets/images/login-background.jpg';

//components
import { Input } from '../components/formgroup/input';
import { Button } from '../components/formgroup/button';

//types
type InputValuesType = {
	email: string;
	password: string;
	confirmPassword: string;
};

const Register: FC = () => {
	const [inputValues, setInputValues] = useState<InputValuesType>({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const InputValuesHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<S.Mainfield background={LoginBackground.src}>
			<S.LoginFormField>
				<h3>LOGIN TO YOUR ACCOUNT</h3>
				<small>Manage all daily tasks with TaskMan</small>
				<div className='formGroup'>
					<Input
						placeholder='Email'
						name='email'
						value={inputValues.email}
						getInputValue={InputValuesHandler}
						extraClass='auth_input'
						icon='fa-light fa-at'
					/>
					<Input
						placeholder='Password'
						name='password'
						value={inputValues.password}
						getInputValue={InputValuesHandler}
						extraClass='auth_input'
						icon='fa-light fa-fingerprint'
						type='password'
					/>
					<Input
						placeholder='Conform Password'
						name='confirmPassword'
						value={inputValues.confirmPassword}
						getInputValue={InputValuesHandler}
						extraClass='auth_input'
						icon='fa-light fa-fingerprint'
						type='password'
					/>
					<Button text='Register' functionality={() => {}} borderRadius='circle' shadow={true} />
					<p className='register'>
						Do you already have an account ? <Link href='/login'>Login Now</Link>
					</p>
				</div>
			</S.LoginFormField>
		</S.Mainfield>
	);
};

export default Register;
