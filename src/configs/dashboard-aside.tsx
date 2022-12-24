interface ItemsType {
	title: string;
	link: string;
	icon: string;
}

class AsideItemProvider {
	items(): Array<ItemsType> {
		return [
			{
				title: 'Home',
				link: '/dashboard',
				icon: 'fa-duotone fa-house',
			},
			{
				title: 'Create Category',
				link: '/create/category',
				icon: 'fa-duotone fa-layer-plus',
			},
			{
				title: 'Invoices',
				link: '/invoices',
				icon: 'fa-duotone fa-file-invoice-dollar',
			},
		];
	}
}

export default new AsideItemProvider();
