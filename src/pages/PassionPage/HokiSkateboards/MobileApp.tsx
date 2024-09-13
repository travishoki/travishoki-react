import React from 'react';

import { TechListHorizontal } from '~components/TechListHorizontal/TechListHorizontal';
import { CSS, HTML, JAVSCRIPT, REACT_JS, TechKeys } from '~const/Tech.const';

import { PassionLabel } from './PassionLabel';
import { Title } from './Title';
import './MobileApp.scss';

const techs: (keyof TechKeys)[] = [CSS, HTML, JAVSCRIPT, REACT_JS];

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
		<p>Kids skateboarding game</p>

		<PassionLabel>Technologies:</PassionLabel>
		<div className="tech-container">
			<TechListHorizontal list={techs} />
		</div>
		<p>
			Built in React Native with Typescript, using the react-native-game-engine
			and MatterJs
		</p>

		<div className="app-badges">
			<a
				href="https://apps.apple.com/us/app/hoki-skateboards/id1622675312"
				rel="noreferrer"
				target="_blank"
				title="Download on the App Store"
			>
				<img
					alt="Download on the App Store"
					className="apple-badge"
					height="40"
					src="https://hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
					width="120"
				/>
			</a>
			<a
				href="https://play.google.com/store/apps/details?id=com.hokiskateboards.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
				rel="noreferrer"
				target="_blank"
				title="Get it on Google Play"
			>
				<img
					alt="Get it on Google Play"
					className="google-badge"
					height="250"
					src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
					width="646"
				/>
			</a>
		</div>

		<p className="copyright">
			Apple and the Apple logo are trademarks of Apple Inc. Android, Google Play
			and the Google Play logo are trademarks of Google LLC.
		</p>
	</div>
);
