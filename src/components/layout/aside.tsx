import Link from 'next/link';
import { useRouter } from 'next/router';

//assets
import * as S from './aside.style';

//component
import AsideItemProvider from '../../configs/dashboard-aside';

const AsideProvider = () => {
	const router = useRouter();

	const AsideItems = AsideItemProvider.items().map((item, index) => (
		<S.AsideItems key={`aside_single_item_${index}`}>
			<Link href={item.link} className={router.pathname === item.link ? 'active' : ''}>
				<i className={item.icon}></i>
				<p>{item.title}</p>
			</Link>
		</S.AsideItems>
	));

	return (
		<S.AsideMainField>
			<S.AsideInsideField>
				<ul>{AsideItems}</ul>
			</S.AsideInsideField>
		</S.AsideMainField>
	);
};

export default AsideProvider;
