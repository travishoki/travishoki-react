import React, { useState } from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { AboutType } from './AboutPage.data';
import './AboutItem.scss';

const defaultImageSize = [200, 200];

export const AboutItem = (item: AboutType) => {
	const [readMore, setReadMore] = useState(false);

	const hasReadMore = item.desc.length > 1;
	const onClickReadMore = () => setReadMore(!readMore);

	return (
		<li className="staggered-item about-item">
			<div className="image-container">
				<ImageMaximizable
					alt={item.alt ?? item.title}
					className="about-item-image"
					dimensions={defaultImageSize}
					imageClassName="image"
					src={item.img}
					srcLarge={item.imgLarge ?? item.img}
					srcLargeDimensions={item.imgLargeDimensions ?? defaultImageSize}
				/>
			</div>
			<div className="text">
				<h2>{item.title}</h2>

				{readMore ? (
					<>
						{item.desc.map((desc, index) => (
							<p key={index}>{desc}</p>
						))}
					</>
				) : (
					<p>{item.desc[0]}</p>
				)}

				{hasReadMore && (
					<p className="pointer read-more" onClick={onClickReadMore}>
						{readMore ? 'Read Less' : 'Read More'}
					</p>
				)}
			</div>
		</li>
	);
};
