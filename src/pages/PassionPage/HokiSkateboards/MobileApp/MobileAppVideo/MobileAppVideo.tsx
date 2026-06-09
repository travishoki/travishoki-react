import React, { useState } from 'react';

import { VideoButton } from '~components/VideoButton/VideoButton';
import { VideoModal } from '~components/VideoModal/VideoModal';
import './MobileAppVideo.scss';

const APP_ICON =
	'http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png';
const VIDEO_SRC = 'videos/game-launch.mp4';

export const MobileAppVideo = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="mobile-app-video">
				<VideoButton onClick={() => setOpen(true)} size={250} src={APP_ICON} />
			</div>

			{open && <VideoModal onClose={() => setOpen(false)} src={VIDEO_SRC} />}
		</>
	);
};
