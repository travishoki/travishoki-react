import React from 'react';

import { StaggeredItem } from '~components/StaggeredList/StaggeredItem/StaggeredItem';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';

import { AboutType } from '../AboutPage.data';
import { AboutImage } from './AboutImage/AboutImage';
import { AboutVideo } from './AboutVideo/AboutVideo';
import { Signature } from './Signature/Signature';

import styles from './AboutItem.module.scss';

export const AboutItem = (item: AboutType) => (
	<StaggeredItem className={styles.aboutItem}>
		<div className="image-container">
			{item.video ? <AboutVideo item={item} /> : <AboutImage item={item} />}
		</div>
		<div className="info-box">
			<h2>{item.title}</h2>

			<TextWithReadMore paragraphs={item.desc} />

			{item.hasSignature && <Signature />}
		</div>
	</StaggeredItem>
);
