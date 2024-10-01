import React, { useState } from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { AboutType } from './AboutPage.data';
import './AboutItem.scss';

export const AboutItem = (item: AboutType) => {
	const [readMore, setReadMore] = useState(false);

	const hasReadMore = item.desc.length > 1;
	const onClickReadMore = () => setReadMore(true);

	return (
		<li className="staggered-item about-item">
			<ImageMaximizable
				alt={item.alt ?? item.title}
				className="round image"
				src={item.img}
				srcLarge={item.imgLarge ?? item.img}
				srcLargeDimensions={item.imgLargeDimensions ?? [200, 200]}
			/>
			<div className="text">
				<h2>{item.title}</h2>

				{readMore ? (
					<>
						{item.desc.map((desc, index) => (
							<p key={index}>{desc}</p>
						))}
					</>
				) : (
					<>
						<p>{item.desc[0]}</p>
						{hasReadMore && (
							<p className="pointer read-more" onClick={onClickReadMore}>
								Read More
							</p>
						)}
					</>
				)}
			</div>
		</li>
	);
};
