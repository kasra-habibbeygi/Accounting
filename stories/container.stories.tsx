import '../src/assets/styles/globals/general.css';
import '../src/assets/styles/globals/fontawsome.css';

import { Story } from '@storybook/react';
import { ComponentTypes, Container } from '../src/components/template/backgorund';

export default {
	title: 'Form Group',
	component: Container,
};

const Template: Story<ComponentTypes> = args => <Container {...args} />;

export const ContainerTemp = Template.bind({});
ContainerTemp.storyName = 'Container';
