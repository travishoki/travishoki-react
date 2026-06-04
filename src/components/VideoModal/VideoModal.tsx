import React from 'react';

import './VideoModal.scss';

type VideoModalProps = {
	onClose: () => void;
	src: string;
};

export const VideoModal = ({ onClose, src }: VideoModalProps) => (
	<div className="video-modal" onClick={onClose}>
		<div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
			<video autoPlay className="video-modal-player" controls src={src} />
			<button className="video-modal-close" onClick={onClose}>
				<i className="fa fa-close" />
			</button>
		</div>
	</div>
);
