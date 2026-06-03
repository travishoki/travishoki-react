import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { AboutType } from './AboutPage.data';
import { Signature } from './Signature/Signature';
import './AboutItem.scss';

const defaultImageSize = [200, 200];

export const AboutItem = (item: AboutType) => (
	<li className="staggered-item about-item">
		<div className="image-container">
			<ImageMaximizable
				alt={item.alt ?? item.title}
				className="about-item-image"
				dimensions={defaultImageSize}
				imageClassName="image"
				src={item.imgSmall}
				srcLarge={item.imgLarge ?? item.imgSmall}
				srcLargeDimensions={item.imgLargeDimensions ?? defaultImageSize}
			/>
		</div>
		<div className="info-box">
			<h2>{item.title}</h2>

			<TextWithReadMore paragraphs={item.desc} />

			{item.hasSignature && <Signature />}
		</div>
	</li>
);
