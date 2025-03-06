import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Языки программирования', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Фреймворки', slug: 'framework' }),
	defineSkillCategory({ name: 'Библиотеки', slug: 'library' }),
	defineSkillCategory({ name: 'Языки', slug: 'lang' }),
	defineSkillCategory({ name: 'Базы данных', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Тестирование', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Операционные системы', slug: 'os' }),
	defineSkillCategory({ name: 'Дизайн', slug: 'design' }),
	defineSkillCategory({ name: 'Софт-навыки', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Навыки';

const items = [
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'',		
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c#',
		color: 'purple',
		description:
			'',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'turquoise',
		description:
			'',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description:
			'',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: '#87CEEB',
		description:
			'',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),



	defineSkill({
		slug: 'redos',
		color: 'red',
		description:
			'',
		logo: Assets.RedOs,
		name: 'RedOS',
		category: 'os'
	}),
	defineSkill({
		slug: 'altlinux',
		color: 'yellow',
		description:
			'',
		logo: Assets.Altlin,
		name: 'AltLinux',
		category: 'os'
	}),
	defineSkill({
		slug: 'fedora',
		color: '#2ed9ff',
		description:
			'',
		logo: Assets.Fedora,
		name: 'FedoraOS',
		category: 'os'
	}),
	defineSkill({
		slug: 'ubuntu',
		color: '#ff2600',
		description:
			'',
		logo: Assets.Ubuntu,
		name: 'Ubuntu',
		category: 'os'
	}),
	


	defineSkill({
		slug: 'postgre',
		color: '#6b6ebf',
		description:
			'',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sql server',
		color: '#e0101e',
		description:
			'',
		logo: Assets.Sqlserver,
		name: 'SQL server',
		category: 'db'
	}),



	defineSkill({
		slug: 'git',
		color: '#fc3314',
		description:
			'',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: '#0077ff',
		description:
			'',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	})


] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
