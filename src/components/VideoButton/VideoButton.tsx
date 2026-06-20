import React from 'react';

import { faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
				<OverlayWithIcon icon={faPlay} onClick={() => onClick()} />
				<img
					alt="Video thumbnail"
					className={styles.videoButtonImage}
					src={src}
				/>
			</div>
			<span
				className={styles.videoButtonIcon}
				onClick={() => onClick()}
				style={{ fontSize, height: iconSize, width: iconSize }}
			>
				<FontAwesomeIcon icon={faVideo} />
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
