import React from 'react';

import './ImageModal.scss';

export const ImageModal = ({ onClose, src }: ImageModalProps) => {
	if (!src) return null;

	return (
		<div className="image-modal">
			<div className="image-modal-inner">
				<img src={src} />
				<i className="fa fa-close close-icon" onClick={onClose} />
			</div>
		</div>
	);
};

type ImageModalProps = {
	onClose: () => void;
	src: string | null;
};
