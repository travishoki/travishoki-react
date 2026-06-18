import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import * as TECH from '~const/Tech.const';

import { DownloadAppSection } from './DownloadAppSection/DownloadAppSection';
import { APP_GALLERY_IMAGES } from './MobileAppImageGallery/MobileAppImageGallery.data';
import { MobileAppVideo } from './MobileAppVideo/MobileAppVideo';
import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';

import styles from './MobileApp.module.scss';

const techs: TECH.TechKey[] = [
	TECH.CSS,
	TECH.HTML,
	TECH.JAVASCRIPT,
	TECH.REACT_JS,
	TECH.REACT_NATIVE,
	TECH.FIREBASE,
];

export const MobileApp = () => (
	<div className={`pt-4 ${styles.appSection}`}>
		<div className="row mb-4">
			<div className="col-sm-7">
				<Title title="Mobile App" />
				<img
					className={styles.appIcon}
					height="200"
					src="http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png"
					title="Hoki Skateboards App"
					width="200"
				/>
				<PassionLabel>Description:</PassionLabel>
				<p className="indent">Kid&apos;s skateboarding game</p>

				<TechListCatalogue list={techs} />
			</div>
			<div className="col-sm-5">
				<ImageGallery images={APP_GALLERY_IMAGES} />
			</div>
		</div>

		<MobileAppVideo />

		<DownloadAppSection />
	</div>
);
