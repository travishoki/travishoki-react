import { GalleryImage } from '~components/ImageGallery/types';
import { TechKey } from '~const/Tech.const';

export type ProjectType = {
	aiIntegration?: string | string[];
	company: string;
	companySlug: string;
	contributions: string | string[];
	date?: string;
	description: string | string[];
	gallery: (GalleryImage | string)[];
	itemKey: string;
	learned: string | string[];
	live?: boolean;
	subtitle?: string;
	techs: TechKey[];
	url?: string;
};
