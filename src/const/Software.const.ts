import ImgIllustrator from '~images/icons/software-icons/adobe-illustrator.png';
import ImgIndesign from '~images/icons/software-icons/adobe-indesign.png';
import ImgPhotoshop from '~images/icons/software-icons/adobe-photoshop.png';
import ImgPremierPro from '~images/icons/software-icons/adobe-premier-pro.png';
import ImgProcreate from '~images/icons/software-icons/procreate.png';

export type SoftwareType = 'design' | 'illustration' | 'video';

export type SoftwareInfo = {
	image: string;
	label: string;
	type: SoftwareType;
};

export const SOFTWARE = {
	ILLUSTRATOR: {
		image: ImgIllustrator,
		label: 'Adobe Illustrator',
		type: 'illustration',
	},
	INDESIGN: { image: ImgIndesign, label: 'Adobe InDesign', type: 'design' },
	PHOTOSHOP: { image: ImgPhotoshop, label: 'Adobe Photoshop', type: 'design' },
	PREMIER_PRO: {
		image: ImgPremierPro,
		label: 'Adobe Premier Pro',
		type: 'video',
	},
	PROCREATE: { image: ImgProcreate, label: 'Procreate', type: 'illustration' },
} satisfies Record<string, SoftwareInfo>;

export type SoftwareKey = keyof typeof SOFTWARE;
