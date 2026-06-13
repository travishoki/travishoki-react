import ImgIllustrator from '~images/icons/software-icons/adobe-illustrator.jpg';
import ImgIndesign from '~images/icons/software-icons/adobe-indesign.jpg';
import ImgPhotoshop from '~images/icons/software-icons/adobe-photoshop.jpg';
import ImgPremierPro from '~images/icons/software-icons/adobe-premier-pro.jpg';
import ImgProcreate from '~images/icons/software-icons/procreate.jpg';

type SoftwareType = 'design' | 'illustration' | 'video';

type SoftwareInfo = {
	image: string;
	label: string;
	type: SoftwareType;
};

export const SOFTWARE: Record<string, SoftwareInfo> = {
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
};

export type SoftwareKey = keyof typeof SOFTWARE;
