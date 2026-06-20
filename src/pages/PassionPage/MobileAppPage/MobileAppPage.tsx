import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import { ROUTES } from '~const/Routes.const';

import { DownloadAppSection } from './DownloadAppSection/DownloadAppSection';
import {
	hokiSkateboardsMobileAppDescription,
	hokiSkateboardsMobileAppGallery,
	hokiSkateboardsMobileAppTechAppList,
} from './MobileAppPage.const';
import { MobileAppVideo } from './MobileAppVideo/MobileAppVideo';
import { PassionLabel } from '../PassionLabel/PassionLabel';
import { Title } from '../Title/Title';

import styles from './MobileApp.module.scss';

export const MobileAppPage = () => {
	return (
		<>
			<PageSeo seoData={PAGE_SEO[ROUTES.MOBILE_APP]} />
			<section className="boxed boxed-lg">
				<div className="row mb-4">
					<div className="col-sm-7">
						<Title title="React Native Mobile App" />
						<img
							className={styles.appIcon}
							height="200"
							src="http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png"
							title="Hoki Skateboards App"
							width="200"
						/>
						<PassionLabel>Description:</PassionLabel>

						{hokiSkateboardsMobileAppDescription.map((paragraph, index) => (
							<p key={index} className="indent">
								{paragraph}
							</p>
						))}

						<TechListCatalogue list={hokiSkateboardsMobileAppTechAppList} />
					</div>
					<div className="col-sm-5">
						<ImageGallery
							images={hokiSkateboardsMobileAppGallery}
							square={false}
						/>
					</div>
				</div>

				<MobileAppVideo />
				<DownloadAppSection />
			</section>
		</>
	);
};
