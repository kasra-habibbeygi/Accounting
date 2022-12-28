import type { FC, ReactNode } from 'react';
import { Global, useTheme } from '@emotion/react';

//assets
import * as S from './aside.style';

//component
import Aside from './aside';

//types
type ComponentTypes = {
	children: ReactNode;
	asideStatus: boolean;
};

const LayoutProvider: FC<ComponentTypes> = ({ children, asideStatus }) => {
	const theme = useTheme();

	return (
		<>
			<Global
				styles={{
					body: {
						backgroundColor: theme.palette.color.background.primary,
					},
				}}
			/>
			{asideStatus ? (
				<>{children}</>
			) : (
				<S.DashboardMainField>
					<Aside />
					{children}
				</S.DashboardMainField>
			)}
		</>
	);
};

export default LayoutProvider;
