import '../src/assets/styles/globals/general.css';
import '../src/assets/styles/globals/fontawsome.css';

import { Story } from '@storybook/react';
import { ComponentTypes, Input } from '../src/components/formgroup/input';

export default {
	title: 'Form Group',
	component: Input,
};

const Template: Story<ComponentTypes> = args => <Input {...args} />;

export const InputTemp = Template.bind({});
InputTemp.storyName = 'Input With Label';
InputTemp.args = {
	name: 'email',
	value: 'kasra@gmail.com',
	getInputValue: () => {},
	label: 'email',
	icon: '',
	placeholder: 'Enter you Email !',
	type: 'text',
	extraClass: '',
};
