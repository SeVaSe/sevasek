import Assets from './assets';
import type { Education } from './types';

const title = 'Обучение';

const items: Array<Education> = [
	{
		degree: 'Колледж информатики и программирования при Финансовом Университете',
		description: '',
		location: 'Москва',
		logo: Assets.Unknown,
		name: '',
		organization: 'КИПФИН',
		period: { from: new Date(2020, 8, 1), to: new Date(2024, 6, 5) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['СПО', 'Информационные системы и программирование', 'Очная форма обучения']
	},
	{
		degree: 'Финансовый университет при Правительстве РФ',
		description: '',
		location: 'Москва',
		logo: Assets.Unknown,
		name: '',
		organization: 'ФУ',
		period: { from: new Date(2024, 9, 5) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Бакалавриат', 'Прикладная информатика', 'Заочная форма обучения']
	},
	{
		degree: 'Магистратура...?',
		description: 'Думаю куда поступать на магистратуру, какое направление выбрать',
		location: 'Москва',
		logo: Assets.Unknown,
		name: '',
		organization: 'Какой универ?',
		period: { from: new Date()},
		shortDescription: 'Думаю куда поступать на магистратуру, какое направление выбрать',
		slug: 'dummy-education-item-3',
		subjects: ['Магистратура?', 'Политология?', 'Прикладная информатика?']
	}
];

const EducationData = { title, items };

export default EducationData;
