import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import { ROUTES } from '~const/Routes.const';
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
		<PageSeo seoData={PAGE_SEO[ROUTES.FIGHT_FOR_YOUR_DREAMS]} />
		<section>
			<div className="boxed boxed-lg">
				<Logo />
				<CoverImage />
				<BookHeading />
				<div className="row gy-3">
					<div className="col-sm-6">
						<div className="boxed boxed-lg">
							<About />
							<ImageGallery images={BOOK_LAUCH_GALLERY} />
						</div>
					</div>
					<div className="col-sm-6">
						<a
							href={AMAZON_HREF}
							rel="noreferrer"
							target="_blank"
							title="Fight For Your Dreams"
						>
							<ProjectImage alt="Fight For Your Dreams" src={ImgCover} />
						</a>
						<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
						<Description />
						<SoftwareCatalogue list={techSoftwareList} />
					</div>
				</div>
			</div>
		</section>
	</>
);
