import React from 'react';

import { getDimensions } from './ImageModal.helpers';
import { useScrollLock } from './ImageModal.hooks';
import './ImageModal.scss';

const PADDING = 50;

export const ImageModal = ({
	onClose,
	src,
	srcLargeDimensions,
}: ImageModalProps) => {
	useScrollLock();

	const originalWidth = srcLargeDimensions[0];
	const originalHeight = srcLargeDimensions[1];
	const screenWidth = window.innerWidth - PADDING * 2;
	const screenHeight = window.innerHeight - PADDING * 2;

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
				<i className="fa fa-close close-icon" />
			</div>
		</div>
	);
};

type ImageModalProps = {
	onClose: () => void;
	src: string;
	srcLargeDimensions: number[];
};
