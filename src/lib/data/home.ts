import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Главная';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Привет! Меня зовут Константин, я Инженер-программист в компании РедСофт',
	links: [
		{ label: 'GitHub', href: 'https://github.com/SeVaSe', icon: 'i-carbon-logo-github' },
		{ label: 'Telegram', href: 'https://t.me/sevasek', icon: 'i-carbon-chat' }, 
		{ label: 'Email', href: 'mailto:sevasek.inter@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
