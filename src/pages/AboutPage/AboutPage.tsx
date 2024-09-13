import React, { useState } from 'react';

import { AboutPageData, AboutType } from './AboutPage.data';
import { SelectedImage } from './SelectedImage';

export const AboutPage = () => {
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const onClickImage = (item: AboutType) => {
		setSelectedImg(item.img);
	};

	const onCloseImage = () => {
		setSelectedImg(null);
	};

	return (
		<>
			{selectedImg && (
				<SelectedImage onClose={onCloseImage} src={selectedImg} />
			)}

			<div className="about" id="container">
				<div className="boxed boxed-md">
					<h1>About Me</h1>

					<ul className="staggered">
						{AboutPageData.map((item, index) => (
							<li key={index} className="staggered-item">
								<div className="image">
									<img onClick={() => onClickImage(item)} src={item.img} />
								</div>
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
		</>
	);
};
