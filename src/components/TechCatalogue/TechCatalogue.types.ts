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

export type TechCatalogueItemData = {
	image: string;
	label: string;
	to?: string;
	type?: TechType;
};
