import React from 'react';

import { getDimensions } from './ImageModal.helpers';
import { useScrollLock } from './ImageModal.hooks';
import './ImageModal.scss';

export const ImageModal = ({
	onClose,
	src,
	srcLargeDimensions,
}: ImageModalProps) => {
	useScrollLock();

	const originalWidth = srcLargeDimensions[0];
	const originalHeight = srcLargeDimensions[1];
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const [width, height] = getDimensions(
		originalWidth,
		originalHeight,
		screenWidth,
		screenHeight,
	);

	return (
		<div className="image-modal" onClick={onClose}>
			<div className="image-modal-inner">
				<img
					src={src}
					style={{
						height,
						width,
					}}
				/>
				<button className="close-icon">
					<i className="fa fa-close" />
				</button>
			</div>
		</div>
	);
};

type ImageModalProps = {
	onClose: () => void;
	src: string;
	srcLargeDimensions: number[];
};
