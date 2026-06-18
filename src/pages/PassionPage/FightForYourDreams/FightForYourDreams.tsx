import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { GalleryImage } from '~components/ImageGallery/types';
import ImgBackCover from '~images/passion/fight-for-your-dreams/fight-for-your-dreams-back.jpg';
import ImgCover from '~images/passion/fight-for-your-dreams/fight-for-your-dreams.jpg';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { BookHeading } from './BookHeading/BookHeading';
import { CoverImage } from './CoverImage/CoverImage';

const AMAZON_HREF =
	'https://www.amazon.com/dp/1734008393/ref=cm_sw_r_as_gl_api_gl_i_98XS8F2BTKPZQ7RK5H76?linkCode=ml1&tag=hokiskatebo0f-20&_encoding=UTF8&tag=hokiskatebo0f-20&linkCode=ur2&linkId=c8f27dfffb604bda3dba492d9425eabe&camp=1789&creative=9325';

const GALLERY_IMAGES = [
	{ filename: ImgCover },
	{ filename: ImgBackCover },
] as GalleryImage[];

export const FightForYourDreams = () => {
	return (
		<section className="boxed boxed-lg p-3">
			<BookHeading />
			<CoverImage />
			<div className="row">
				<div className="col-sm-6 pt-3">
					<div className="boxed boxed-lg">
						<p>Book Description:</p>
						<p>
							Go Get It, Girl! While the girls are at a slumber party, they talk
							about what they want to be when they grow up. One of the girls
							throws the others for a loop when she says what she wants to be
							and the girls&apos; minds are opened to new possibilities.
						</p>
						<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
					</div>
				</div>
				<div className="col-sm-6 pt-3">
					<ImageGallery images={GALLERY_IMAGES} />
				</div>
			</div>
		</section>
	);
};
