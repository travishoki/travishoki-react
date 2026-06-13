import React from 'react';

import styles from './VideoModal.module.scss';

export const VideoModal = ({ onClose, src }: VideoModalProps) => (
	<div className={styles.videoModal} onClick={onClose}>
		<div
			className={styles.videoModalInner}
			onClick={(e) => e.stopPropagation()}
		>
			<video autoPlay className={styles.videoModalPlayer} controls src={src} />
			<button className={styles.videoModalClose} onClick={onClose}>
				<i className="fa fa-close" />
			</button>
		</div>
	</div>
);

type VideoModalProps = {
	onClose: () => void;
	src: string;
};
