import React from 'react';

import './SelectedImage.scss';

export const SelectedImage = ({ onClose, src }: SelectedImageProps) => {
	return (
		<div className="selected-image">
			<div className="selected-image-inner">
				<img src={src} />
				<i className="fa fa-close close-icon" onClick={onClose} />
			</div>
		</div>
	);
};

type SelectedImageProps = {
	onClose: () => void;
	src: string;
};
