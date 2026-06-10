import React from 'react';

import './VideoButton.scss';

type VideoButtonProps = {
	onClick: () => void;
	size?: number;
	src: string;
};

const DIVIDER = 3;

export const VideoButton = ({ onClick, size = 300, src }: VideoButtonProps) => {
	const iconSize = size / DIVIDER;
	const fontSize = iconSize / DIVIDER;

	return (
		<button
			className="video-button"
			onClick={onClick}
			style={{ height: size, width: size }}
		>
			<img alt="Video thumbnail" className="video-button-image" src={src} />
			<span
				className="video-button-icon"
				style={{ fontSize, height: iconSize, width: iconSize }}
			>
				<i className="fa fa-video-camera" />
			</span>
		</button>
	);
};
