import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import ImgCover from '~images/passion/fight-for-your-dreams/book-gallery/fight-for-your-dreams.jpg';

import { ButtonLink } from '../ButtonLink/ButtonLink';
import { About } from './About/About';
import { BookHeading } from './BookHeading/BookHeading';
import { CoverImage } from './CoverImage/CoverImage';
import { Description } from './Description/Description';
import {
	AMAZON_HREF,
	BOOK_LAUCH_GALLERY,
	techSoftwareList,
} from './FightForYourDreamsPage.const';
import { Logo } from './Logo/Logo';
import { ProjectImage } from '../HokiSkateboardsPage/ProjectImage/ProjectImage';

export const FightForYourDreamsPage = () => (
	<>
		<section>
			<div className="boxed boxed-xl">
				<Logo />
				<CoverImage />
				<BookHeading />
				<div className="row gy-3">
					<div className="col-sm-6">
						<div className="boxed boxed-xl">
							<About />
							<ImageGallery images={BOOK_LAUCH_GALLERY} />
						</div>
					</div>
					<div className="col-sm-6">
						<ExternalLink href={AMAZON_HREF} title="Fight For Your Dreams">
							<ProjectImage alt="Fight For Your Dreams" src={ImgCover} />
						</ExternalLink>
						<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
						<Description />
						<SoftwareCatalogue list={techSoftwareList} />
					</div>
				</div>
			</div>
		</section>
	</>
);
