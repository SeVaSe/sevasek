import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'Навыки', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Проекты', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Опыт', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Обучение', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Резюме', icon: 'i-carbon-document', href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
