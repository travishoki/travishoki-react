import { GalleryImage } from '~components/ImageGallery/types';
import { TechKey } from '~const/Tech.const';

export type ProjectType = {
	company: string;
	companySlug: string;
	contributions: string | string[];
	date?: string;
	description: string | string[];
	gallery: GalleryImage[];
	itemKey: string;
	learned: string | string[];
	live?: boolean;
	subtitle?: string;
	techs: TechKey[];
	url?: string;
};
