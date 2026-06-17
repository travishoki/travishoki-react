export type TechType =
	| 'frontend'
	| 'backend'
	| 'cms'
	| 'tool'
	| 'integrations'
	| 'legacy'
	| 'design'
	| 'illustration'
	| 'video';

// `as const` makes each value a string literal (not `string`), so the
// ProficiencyLevel type derived below is constrained to exactly these values.
export const LEVELS = {
	ADVANCED: 'advanced',
	BEGINNER: 'beginner',
	EXPERT: 'expert',
} as const;

// Proficiency tiers, surfaced as a colored pill in the expanded catalogue view.
// Ordered most-to-least proficient.
export type ProficiencyLevel = (typeof LEVELS)[keyof typeof LEVELS];

export type TechCatalogueItemData = {
	image: string;
	label: string;
	level?: ProficiencyLevel;
	type?: TechType;
};
