import { FC, useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';
import validator from 'validator';
import Axios from '../configs/axios';

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
};

const Login: FC = () => {
	const [inputValues, setInputValues] = useState<InputValuesType>({
		email: '',
		password: '',
	});

	const InputValuesHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	const loginHandler = async () => {
		if (validator.isEmpty(inputValues.email) || validator.isEmpty(inputValues.password)) {
			toast.error('Please fill all inputs !');
		} else if (!validator.isEmail(inputValues.email)) {
			toast.error('Email is invalid , please try again !');
		} else {
			try {
				await trigger(inputValues);
			} catch (e: any) {
				console.log(e?.response.data.message);
			}
		}
	};

	const fetcher = (url: string, { arg }: any) => Axios.post(url, arg).then(res => res);
	const { trigger } = useSWRMutation('/users/session', fetcher);

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
					<Button text='Login' functionality={loginHandler} borderRadius='circle' shadow={true} />
					<p className='register'>
						Dont have any account yet ? <Link href='/register'>Create a new one</Link>
					</p>
				</div>
			</S.LoginFormField>
		</S.Mainfield>
	);
};

export default Login;
