export const TYPES = {
	AI: 'ai',
	BACKEND: 'backend',
	CMS: 'cms',
	DESIGN: 'design',
	FRONTEND: 'frontend',
	ILLUSTRATION: 'illustration',
	INTEGRATIONS: 'integrations',
	TOOL: 'tool',
	VIDEO: 'video',
} as const;

export type TechType = (typeof TYPES)[keyof typeof TYPES];

// `as const` makes each value a string literal (not `string`), so the
// ProficiencyLevel type derived below is constrained to exactly these values.
export const LEVEL = {
	ADVANCED: 'advanced',
	EXPERT: 'expert',
	NOVICE: 'novice',
} as const;

// Proficiency tiers, surfaced as a colored pill in the expanded catalogue view.
// Ordered most-to-least proficient.
export type ProficiencyLevel = (typeof LEVEL)[keyof typeof LEVEL];

export type TechCatalogueItemData = {
	image: string;
	label: string;
	legacy?: boolean;
	level?: ProficiencyLevel;
	type?: TechType;
};
