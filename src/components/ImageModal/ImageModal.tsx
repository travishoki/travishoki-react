import React from 'react';

import { getDimensions } from './ImageModal.helpers';
import './ImageModal.scss';

export const ImageModal = ({
	onClose,
	src,
	srcLargeDimensions,
}: ImageModalProps) => {
	const [width, height] = getDimensions(srcLargeDimensions);

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
