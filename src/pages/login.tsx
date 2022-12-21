//assets
import * as S from '../assets/styles/login/login';
import LoginBackground from '../assets/images/login-background.jpg';

//types
import { FC } from 'react';

//components
import { Input } from '../components/formgroup/input';
import { Button } from '../components/formgroup/button';

const Login: FC = () => {
	return (
		<S.Mainfield background={LoginBackground.src}>
			<S.LoginFormField>
				<h3>LOGIN TO YOUR ACCOUNT</h3>
				<small>Manage all daily tasks with TaskMan</small>
				<div className='formGroup'>
					<Input name='test' value='kasrahabibbeygi@gmail.com' getInputValue={() => {}} />
					<Input name='test' value='test' getInputValue={() => {}} />
					<Button text='Login' functionality={() => {}} />
				</div>
			</S.LoginFormField>
		</S.Mainfield>
	);
};

export default Login;
