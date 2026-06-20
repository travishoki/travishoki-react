import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './VideoModal.module.scss';

export const VideoModal = ({ onClose, src }: VideoModalProps) => (
	<div className={styles.videoModal} onClick={onClose}>
		<div
			className={styles.videoModalInner}
			onClick={(e) => e.stopPropagation()}
		>
			<video
				autoPlay
				className={styles.videoModalPlayer}
				controls
				muted
				src={src}
			/>
			<button className={styles.videoModalClose} onClick={onClose}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	</div>
);

type VideoModalProps = {
	onClose: () => void;
	src: string;
};
