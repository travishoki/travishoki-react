import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { About } from './About/About';
import { BookHeading } from './BookHeading/BookHeading';
import { CoverImage } from './CoverImage/CoverImage';
import { Description } from './Description/Description';
import { AMAZON_HREF, BOOK_LAUCH_GALLERY } from './FightForYourDreams.const';

export const FightForYourDreams = () => {
	return (
		<section className="boxed boxed-lg p-3">
			<BookHeading />
			<CoverImage />
			<div className="row gy-3">
				<div className="col-sm-6 pt-3">
					<div className="boxed boxed-lg">
						<About />
						<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
					</div>
				</div>
				<div className="col-sm-6 pt-3">
					<ImageGallery images={BOOK_LAUCH_GALLERY} />
					<Description />
				</div>
			</div>
		</section>
	);
};
