import { TechType, TYPES } from './TechCatalogue.types';

export const TYPE_SECTIONS: { label: string; type: TechType }[] = [
	{ label: 'AI Tools', type: TYPES.AI },
	{ label: 'Frontend', type: TYPES.FRONTEND },
	{ label: 'Backend', type: TYPES.BACKEND },
	{ label: 'Content Management System', type: TYPES.CMS },
	{ label: 'Tools', type: TYPES.TOOL },
	{ label: 'Integrations', type: TYPES.INTEGRATIONS },
	{ label: 'Design', type: TYPES.DESIGN },
	{ label: 'Illustration', type: TYPES.ILLUSTRATION },
	{ label: 'Video', type: TYPES.VIDEO },
];
