import React from 'react';

import { AboutPageData } from './AboutPage.data';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<div className="boxed boxed-md">
				<h1>About Me</h1>

				<ul className="staggered">
					{AboutPageData.map((item, index) => (
						<li key={index} className="staggered-item">
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
					))}
				</ul>
			</div>
		</div>
	);
};
