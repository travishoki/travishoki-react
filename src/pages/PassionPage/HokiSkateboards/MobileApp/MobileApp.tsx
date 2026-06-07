import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import {
	CSS,
	FIREBASE,
	HTML,
	JAVASCRIPT,
	REACT_JS,
	REACT_NATIVE,
	TechKey,
} from '~const/Tech.const';

import { PassionLabel } from '../PassionLabel/PassionLabel';
import { Title } from '../Title/Title';
import { AppBadges } from './AppBadges';
import { MobileAppImageGallery } from './MobileAppImageGallery/MobileAppImageGallery';
import './MobileApp.scss';

const techs: TechKey[] = [
	CSS,
	HTML,
	JAVASCRIPT,
	REACT_JS,
	REACT_NATIVE,
	FIREBASE,
];

export const MobileApp = () => (
	<div className="pt-4 app-section">
		<div className="row mb-4">
			<div className="col-sm-7">
				<Title title="Mobile App" />
				<img
					className="app-icon"
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
				<MobileAppImageGallery />
			</div>
		</div>

		<div className="download-app-section">
			<h3>Download My App!</h3>

			<p className="indent">
				Built in React Native with Typescript, using the
				react-native-game-engine and MatterJs.
			</p>

			<p className="indent">
				Currently in the Apple Store, will be back in the Google Play store
				soon!
			</p>

			<AppBadges />

			<p className="copyright">
				Apple and the Apple logo are trademarks of Apple Inc. Android, Google
				Play and the Google Play logo are trademarks of Google LLC.
			</p>
		</div>
	</div>
);
