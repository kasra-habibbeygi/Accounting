import '../src/assets/styles/globals/general.css';
import '../src/assets/styles/globals/fontawsome.css';

import { Story } from '@storybook/react';
import { ButtonProps, Button } from '../src/components/formgroup/button';

export default {
	title: 'Form Group',
	component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ButtonTemp = Template.bind({});
ButtonTemp.storyName = 'Button';
ButtonTemp.args = {
	text: 'Login',
	functionality: () => {},
	type: 'fill',
	color: 'primary',
	icon: '',
	shadow: true,
	disabled: false,
	borderRadius: 'rounded',
	extraClass: '',
};
