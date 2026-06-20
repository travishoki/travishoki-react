import React, { useState } from 'react';

import { VideoButton } from '~components/VideoButton/VideoButton';
import { VideoModal } from '~components/VideoModal/VideoModal';

import { DEFAULT_IMAGE_SIZE } from '../../AboutPage.const';
import { AboutType } from '../../AboutPage.data';

import styles from './AboutVideo.module.scss';

export const AboutVideo = ({ item }: AboutVideoProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className={styles.videoWrapper}>
				<VideoButton
					animate
					onClick={() => setOpen(true)}
					size={DEFAULT_IMAGE_SIZE}
					src={item.imgSmall}
				/>
			</div>

			{open && <VideoModal onClose={() => setOpen(false)} src={item.video!} />}
		</>
	);
};

type AboutVideoProps = {
	item: AboutType;
};
