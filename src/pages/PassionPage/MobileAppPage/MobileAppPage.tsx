import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import { ROUTES } from '~const/Routes.const';

import { AppIcon } from './AppIcon/AppIcon';
import { DownloadAppSection } from './DownloadAppSection/DownloadAppSection';
import {
	hokiSkateboardsMobileAppDescription,
	hokiSkateboardsMobileAppGallery,
	hokiSkateboardsMobileAppTechAppList,
} from './MobileAppPage.const';
import { MobileAppVideo } from './MobileAppVideo/MobileAppVideo';
import { Title } from '../Title/Title';

export const MobileAppPage = () => {
	return (
		<>
			<PageSeo seoData={PAGE_SEO[ROUTES.MOBILE_APP]} />
			<section className="boxed boxed-lg">
				<div className="row mb-4">
					<div className="col-sm-7">
						<Title title="React Native Mobile App" />
						<AppIcon />
						<ParagraphBlock
							label="Description"
							text={hokiSkateboardsMobileAppDescription}
						/>

						<TechListCatalogue list={hokiSkateboardsMobileAppTechAppList} />
					</div>
					<div className="col-sm-5">
						<ImageGallery
							images={hokiSkateboardsMobileAppGallery}
							square={false}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-auto">
						<MobileAppVideo />
					</div>
					<div className="col-sm">
						<AppIcon />
						<DownloadAppSection />
					</div>
				</div>
			</section>
		</>
	);
};
