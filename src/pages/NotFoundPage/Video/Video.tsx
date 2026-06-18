import React, { useCallback, useEffect, useRef, useState } from 'react';

import { getAvailableFrame, getContainedSize, Size } from './Video.helpers';

import styles from './Video.module.scss';

const VIDEO_SRC = '/videos/fail-montage.MP4';

const NATURAL_WIDTH = 1920;
const NATURAL_HEIGHT = 1080;

const DEFAULT_SIZE = { height: 0, width: 0 };

export const Video = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [frameSize, setFrameSize] = useState<Size>(DEFAULT_SIZE);
	const [loaded, setLoaded] = useState(false);

	const fitToFrame = useCallback(() => {
		const frame = getAvailableFrame(containerRef.current);
		setFrameSize(frame);
		setLoaded(true);
	}, []);

	useEffect(() => {
		fitToFrame();
	}, []);

	useEffect(() => {
		window.addEventListener('resize', fitToFrame);

		return () => window.removeEventListener('resize', fitToFrame);
	}, [fitToFrame]);

	const size = loaded
		? getContainedSize(NATURAL_WIDTH, NATURAL_HEIGHT, frameSize)
		: DEFAULT_SIZE;

	return (
		<div
			className={styles.videoContainer}
			ref={containerRef}
			style={{
				height: frameSize.height || undefined,
				width: frameSize.width || undefined,
			}}
		>
			{loaded && (
				<>
					<video
						autoPlay
						height={size.height || undefined}
						loop
						muted
						playsInline
						src={VIDEO_SRC}
						width={size.width || undefined}
					/>
					<p className={styles.overlay}>Looks like you bailed!</p>
				</>
			)}
		</div>
	);
};
