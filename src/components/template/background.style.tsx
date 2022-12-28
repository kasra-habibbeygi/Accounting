import styled from '@emotion/styled';

export const MainBackgorundField = styled.section(props => ({
	backgroundColor: props.theme.palette.color.background.secondary,
	borderRadius: props.theme.palette.borderRadius.container,
	padding: props.theme.palette.padding.container,
	height: 'max-content',
}));
