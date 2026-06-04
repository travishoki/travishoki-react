import React from 'react';

import './VideoButton.scss';

type VideoButtonProps = {
	onClick: () => void;
	size?: number;
	src: string;
};

export const VideoButton = ({ onClick, size = 300, src }: VideoButtonProps) => {
	const iconSize = size / 3;

	return (
		<button
			className="video-button"
			onClick={onClick}
			style={{ height: size, width: size }}
		>
			<img alt="Video thumbnail" className="video-button-image" src={src} />
			<span
				className="video-button-icon"
				style={{ fontSize: iconSize * 0.3, height: iconSize, width: iconSize }}
			>
				<i className="fa fa-video-camera" />
			</span>
		</button>
	);
};
