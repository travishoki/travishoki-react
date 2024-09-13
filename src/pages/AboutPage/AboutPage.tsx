import React from 'react';

import { AboutPageData } from './AboutPage.data';
import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

export const AboutPage = () => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	return (
		<>
			<ImageModal onClose={onCloseImage} src={selectedImg} />

			<div className="about" id="container">
				<div className="boxed boxed-md">
					<h1>About Me</h1>

					<ul className="staggered">
						{AboutPageData.map((item, index) => (
							<li key={index} className="staggered-item">
								<div className="image">
									<img onClick={() => onClickImage(item.img)} src={item.img} />
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
