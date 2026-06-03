import React from 'react';

import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';
import {
	CSS,
	FIREBASE,
	HTML,
	JAVASCRIPT,
	REACT_JS,
	REACT_NATIVE,
	TechKey,
} from '~const/Tech.const';

import { PassionLabel } from './PassionLabel';
import { Title } from './Title';
import './MobileApp.scss';
import { AppBadges } from './MobileApp/AppBadges';

const techs: TechKey[] = [
	CSS,
	HTML,
	JAVASCRIPT,
	REACT_JS,
	REACT_NATIVE,
	FIREBASE,
];

export const MobileApp = () => (
	<div className="app-section">
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

		<TechListSwitcher list={techs} />

		<h3>Download My App!</h3>

		<p>
			Built in React Native with Typescript, using the react-native-game-engine
			and MatterJs.
		</p>

		<AppBadges />

		<p className="copyright">
			Apple and the Apple logo are trademarks of Apple Inc. Android, Google Play
			and the Google Play logo are trademarks of Google LLC.
		</p>
	</div>
);
