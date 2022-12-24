import type { FC, ReactNode } from 'react';

//assets
import * as S from './aside.style';

//component
import Aside from './aside';

//types
type LayoutType = {
	children: ReactNode;
	asideStatus: boolean;
};

const LayoutProvider: FC<LayoutType> = ({ children, asideStatus }): JSX.Element => {
	return asideStatus ? (
		<>{children}</>
	) : (
		<S.DashboardMainField>
			<Aside />
			{children}
		</S.DashboardMainField>
	);
};

export default LayoutProvider;
