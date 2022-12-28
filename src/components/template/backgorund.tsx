import type { FC, ReactNode } from 'react';

//assets
import * as S from '../template/background.style';

//types
export type ComponentTypes = {
	children: ReactNode;
};

export const Container: FC<ComponentTypes> = ({ children }) => {
	return <S.MainBackgorundField>{children}</S.MainBackgorundField>;
};
