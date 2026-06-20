import { GalleryImage } from '~components/ImageGallery/types';
import { SoftwareKey } from '~const/Software.const';
import ImgBookLaunch1 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_1.jpg';
import ImgBookLaunch2 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_2.jpg';
import ImgBookLaunch3 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_3.jpg';
import ImgBookLaunch4 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_4.jpg';
import ImgBookLaunch5 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_5.jpg';
import ImgBookLaunch6 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_6.jpg';
import ImgBookLaunch7 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_7.jpg';
import ImgBookLaunch8 from '~images/passion/fight-for-your-dreams/book-launch-gallery/ffyd_8.jpg';

export const AMAZON_HREF =
	'https://www.amazon.com/dp/1734008393/ref=cm_sw_r_as_gl_api_gl_i_98XS8F2BTKPZQ7RK5H76?linkCode=ml1&tag=hokiskatebo0f-20&_encoding=UTF8&tag=hokiskatebo0f-20&linkCode=ur2&linkId=c8f27dfffb604bda3dba492d9425eabe&camp=1789&creative=9325';

export const BOOK_LAUCH_GALLERY = [
	{ filename: ImgBookLaunch1 },
	{ filename: ImgBookLaunch2 },
	{ filename: ImgBookLaunch3 },
	{ filename: ImgBookLaunch4 },
	{ filename: ImgBookLaunch5 },
	{ filename: ImgBookLaunch6 },
	{ filename: ImgBookLaunch7 },
	{ filename: ImgBookLaunch8 },
] as GalleryImage[];

export const techSoftwareList: SoftwareKey[] = [
	'ILLUSTRATOR',
	'INDESIGN',
	'PHOTOSHOP',
	'PREMIER_PRO',
	'PROCREATE',
];
