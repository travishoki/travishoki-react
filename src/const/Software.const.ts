import ImgIllustrator from '~images/icons/software-icons/adobe-illustrator.png';
import ImgIndesign from '~images/icons/software-icons/adobe-indesign.png';
import ImgPhotoshop from '~images/icons/software-icons/adobe-photoshop.png';
import ImgProcreate from '~images/icons/software-icons/procreate.png';

export const ILLUSTRATOR = 'ILLUSTRATOR';
export const INDESIGN = 'INDESIGN';
export const PHOTOSHOP = 'PHOTOSHOP';
export const PROCREATE = 'PROCREATE';

export type SoftwareKeys = {
	ILLUSTRATOR: 'ILLUSTRATOR';
	INDESIGN: 'INDESIGN';
	PHOTOSHOP: 'PHOTOSHOP';
	PROCREATE: 'PROCREATE';
};

export const SOFTWARE_IMAGES = {
	ILLUSTRATOR: ImgIllustrator,
	INDESIGN: ImgIndesign,
	PHOTOSHOP: ImgPhotoshop,
	PROCREATE: ImgProcreate,
};

export const SOFTWARE_STRINGS: Record<keyof SoftwareKeys, string> = {
	ILLUSTRATOR: 'Adobe Illustrator',
	INDESIGN: 'Adobe InDesign',
	PHOTOSHOP: 'Adobe Photoshop',
	PROCREATE: 'Procreate',
};
