import React from 'react';

import styles from './VideoButton.module.scss';

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
			className={styles.videoButton}
			onClick={onClick}
			style={{ height: size, width: size }}
		>
			<img
				alt="Video thumbnail"
				className={styles.videoButtonImage}
				src={src}
			/>
			<span
				className={styles.videoButtonIcon}
				style={{ fontSize, height: iconSize, width: iconSize }}
			>
				<i className="fa fa-video-camera" />
			</span>
		</button>
	);
};
