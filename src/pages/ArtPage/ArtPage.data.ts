import { CSS, REACT_JS, TechKeys } from '../../const/Tech.const';

export const FILTER_LIST: (keyof TechKeys)[] = [REACT_JS];

export const PROJECTS_DATA: ProjectType[] = [
	{
		company: 'hoki-skateboards',
		contributions: [
			'React Native development',
			'UI/UX Design',
			'Character illustrations',
		],
		desc: 'Teaching myself React Native as a passion project',
		itemKey: 'hoki-skateboards-react-native',
		learned: '',
		live: false,
		subtitle: 'React Native Game',
		techs: [REACT_JS, CSS],
		title: 'ART',
		url: 'https://www.hokiskateboards.com/app/',
	},
];

export type ProjectType = {
	company: string;
	contributions: string[];
	desc: string;
	itemKey: string;
	learned: string;
	live?: boolean;
	subtitle: string;
	techs: (keyof TechKeys)[];
	title: string;
	url?: string;
};
