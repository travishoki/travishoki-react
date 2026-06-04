import React from 'react';

import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { AboutType } from './AboutPage.data';
import { AboutImage } from './AboutImage';
import { AboutVideo } from './AboutVideo';
import { Signature } from './Signature/Signature';
import './AboutItem.scss';

export const AboutItem = (item: AboutType) => (
	<li className="staggered-item about-item">
		<div className="image-container">
			{item.video ? <AboutVideo item={item} /> : <AboutImage item={item} />}
		</div>
		<div className="info-box">
			<h2>{item.title}</h2>

			<TextWithReadMore paragraphs={item.desc} />

			{item.hasSignature && <Signature />}
		</div>
	</li>
);
