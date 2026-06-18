import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { PassionNav } from '../PassionNav/PassionNav';
import { About } from './About/About';
import { BookHeading } from './BookHeading/BookHeading';
import { CoverImage } from './CoverImage/CoverImage';
import { Discription } from './Description/Description';
import {
	AMAZON_HREF,
	BOOK_GALLERY,
	BOOK_LAUCH_GALLERY,
} from './FightForYourDreams.const';
import { Logo } from './Logo/Logo';

export const FightForYourDreamsPage = () => (
	<div id="container">
		<PassionNav />
		<section className="boxed boxed-lg p-3">
			<Logo />
			<CoverImage />
			<BookHeading />
			<div className="row">
				<div className="col-sm-6 pt-3">
					<div className="boxed boxed-lg">
						<About />
						<ImageGallery images={BOOK_LAUCH_GALLERY} />
					</div>
				</div>
				<div className="col-sm-6 pt-3">
					<ImageGallery images={BOOK_GALLERY} />
					<Discription />
					<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
				</div>
			</div>
		</section>
	</div>
);
