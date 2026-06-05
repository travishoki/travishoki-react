import React, { useState } from 'react';

import { VideoButton } from '~components/VideoButton/VideoButton';
import { VideoModal } from '~components/VideoModal/VideoModal';
import { AboutType } from '../../AboutPage.data';
import { DEFAULT_IMAGE_SIZE } from '../../AboutPage.const';

type AboutVideoProps = {
	item: AboutType;
};

export const AboutVideo = ({ item }: AboutVideoProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="d-flex justify-content-center">
				<VideoButton
					onClick={() => setOpen(true)}
					size={DEFAULT_IMAGE_SIZE}
					src={item.imgSmall}
				/>
			</div>

			{open && <VideoModal onClose={() => setOpen(false)} src={item.video!} />}
		</>
	);
};
