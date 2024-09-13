import React from 'react';

import './ImageModal.scss';

export const ImageModal = ({ onClose, src }: ImageModalProps) => {
	return (
		<div className="image-modal" onClick={onClose}>
			<div className="image-modal-inner">
				<img src={src} />
				<i className="fa fa-close close-icon" />
			</div>
		</div>
	);
};

type ImageModalProps = {
	onClose: () => void;
	src: string;
};
