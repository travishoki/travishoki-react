import React from 'react';

import { DivMaybeAnimateScale } from '~animations/DivMaybeAnimateScale';
import { OverlayWithIcon } from '~components/OverlayWithIcon/OverlayWithIcon';

import styles from './VideoButton.module.scss';

const DIVIDER = 3;

export const VideoButton = ({
	animate = false,
	onClick,
	size = 300,
	src,
}: VideoButtonProps) => {
	const iconSize = size / DIVIDER;
	const fontSize = iconSize / DIVIDER;

	return (
		<DivMaybeAnimateScale
			animate={animate}
			className={styles.videoButtonContainer}
			style={{ height: size, width: size }}
		>
			<div className={styles.videoButtonContents}>
				<OverlayWithIcon iconClassName="fa-play" onClick={() => onClick()} />
				<img
					alt="Video thumbnail"
					className={styles.videoButtonImage}
					src={src}
				/>
			</div>
			<span
				className={styles.videoButtonIcon}
				style={{ fontSize, height: iconSize, width: iconSize }}
			>
				<i className="fa fa-video-camera" />
			</span>
		</DivMaybeAnimateScale>
	);
};

type VideoButtonProps = {
	animate?: boolean;
	onClick: () => void;
	size?: number;
	src: string;
};
