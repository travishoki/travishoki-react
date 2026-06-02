import ImgIllustrator from '~images/icons/software-icons/adobe-illustrator.png';
import ImgIndesign from '~images/icons/software-icons/adobe-indesign.png';
import ImgPhotoshop from '~images/icons/software-icons/adobe-photoshop.png';
import ImgPremierPro from '~images/icons/software-icons/adobe-premier-pro.png';
import ImgProcreate from '~images/icons/software-icons/procreate.png';

export const ILLUSTRATOR = 'ILLUSTRATOR';
export const INDESIGN = 'INDESIGN';
export const PHOTOSHOP = 'PHOTOSHOP';
export const PREMIER_PRO = 'PREMIER_PRO';
export const PROCREATE = 'PROCREATE';

export type SoftwareKeys = {
	ILLUSTRATOR: 'ILLUSTRATOR';
	INDESIGN: 'INDESIGN';
	PHOTOSHOP: 'PHOTOSHOP';
	PREMIER_PRO: 'PREMIER_PRO';
	PROCREATE: 'PROCREATE';
};

export const SOFTWARE_IMAGES = {
	ILLUSTRATOR: ImgIllustrator,
	INDESIGN: ImgIndesign,
	PHOTOSHOP: ImgPhotoshop,
	PREMIER_PRO: ImgPremierPro,
	PROCREATE: ImgProcreate,
};

export const SOFTWARE_STRINGS: Record<keyof SoftwareKeys, string> = {
	ILLUSTRATOR: 'Adobe Illustrator',
	INDESIGN: 'Adobe InDesign',
	PHOTOSHOP: 'Adobe Photoshop',
	PREMIER_PRO: 'Adobe Premier Pro',
	PROCREATE: 'Procreate',
};
