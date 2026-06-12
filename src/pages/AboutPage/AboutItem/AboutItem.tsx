import React from 'react';

import { ImageContainer } from '~components/StaggeredList/StaggeredItem/ImageContainer/ImageContainer';
import { InfoBox } from '~components/StaggeredList/StaggeredItem/InfoBox/InfoBox';
import { StaggeredItem } from '~components/StaggeredList/StaggeredItem/StaggeredItem';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';

import { AboutType } from '../AboutPage.data';
import { AboutImage } from './AboutImage/AboutImage';
import { AboutVideo } from './AboutVideo/AboutVideo';
import { Signature } from './Signature/Signature';

export const AboutItem = (item: AboutType) => (
	<StaggeredItem>
		<ImageContainer>
			{item.video ? <AboutVideo item={item} /> : <AboutImage item={item} />}
		</ImageContainer>
		<InfoBox>
			<h2>{item.title}</h2>

			<TextWithReadMore paragraphs={item.desc} />

			{item.hasSignature && <Signature />}
		</InfoBox>
	</StaggeredItem>
);
