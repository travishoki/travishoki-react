import React, { useState } from 'react';

import { CloseButton } from '../CloseButton/CloseButton';
import { getDimensions } from '../ImageModal.helpers';
import { useCloseOnEscape, useScrollLock } from '../ImageModal.hooks';
import { LeftModalArrow } from '../LeftModalArrow/LeftModalArrow';
import { RightModalArrow } from '../RightModalArrow/RightModalArrow';

import styles from './ImageModal.module.scss';

export const ImageModal = ({
	alt,
	dimensions,
	onClose,
	onNext,
	onPrev,
	src,
}: ImageModalProps) => {
	useScrollLock();
	useCloseOnEscape(onClose);

	const [naturalDimensions, setNaturalDimensions] = useState(dimensions);

	const [width, height] = getDimensions(
		naturalDimensions[0],
		naturalDimensions[1],
		window.innerWidth,
		window.innerHeight,
	);

	return (
		<div className={styles.imageModal} onClick={onClose}>
			<div className={styles.imageModalInner}>
				{onPrev && <LeftModalArrow onClick={onPrev} />}

				<img
					alt={alt}
					onLoad={(event) =>
						setNaturalDimensions([
							event.currentTarget.naturalWidth,
							event.currentTarget.naturalHeight,
						])
					}
					src={src}
					style={{
						height,
						width,
					}}
				/>

				{onNext && <RightModalArrow onClick={onNext} />}

				<CloseButton onClick={onClose} />
			</div>
		</div>
	);
};

type ImageModalProps = {
	alt: string;
	dimensions: number[];
	onClose: () => void;
	onNext?: () => void;
	onPrev?: () => void;
	src: string;
};
