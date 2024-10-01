import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { AboutType } from './AboutPage.data';

export const AboutItem = (item: AboutType) => {
	return (
		<li className="staggered-item">
			<ImageMaximizable
				alt={item.alt ?? item.title}
				className="round image"
				src={item.img}
				srcLarge={item.imgLarge ?? item.img}
				srcLargeDimensions={item.imgLargeDimensions ?? [200, 200]}
			/>
			<div className="text">
				<h2>{item.title}</h2>
				{item.desc.map((desc, index) => (
					<p key={index}>{desc}</p>
				))}
			</div>
		</li>
	);
};
