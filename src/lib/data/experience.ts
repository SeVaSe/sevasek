import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Опыт';

const items: Array<Experience> = [
	{
		slug: 'работа1',
		company: 'компания',
		description: 'описание',
		contract: ContractType.SelfEmployed,
		type: 'Софт разраб',
		location: 'Москва',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'инженер',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'краткое описание'
	},
	{
		slug: 'работа2',
		company: 'компания',
		description: 'описание',
		contract: ContractType.SelfEmployed,
		type: 'Софт разраб',
		location: 'Москва',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'инженер',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'краткое описание'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
