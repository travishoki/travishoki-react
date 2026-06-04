import React from 'react';

import { VideoButton } from '~components/VideoButton/VideoButton';
import { AboutType } from './AboutPage.data';
import { DEFAULT_IMAGE_SIZE } from './AboutPage.const';

type AboutVideoProps = {
	item: AboutType;
};

export const AboutVideo = ({ item }: AboutVideoProps) => {
	const onClick = () => {
		window.open(item.video, '_blank');
	};

	return (
		<VideoButton
			onClick={onClick}
			size={DEFAULT_IMAGE_SIZE[0]}
			src={item.imgSmall}
		/>
	);
};
