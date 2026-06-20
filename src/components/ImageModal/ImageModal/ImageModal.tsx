import React, { useState } from 'react';

import { createPortal } from 'react-dom';

import { CloseButton } from '~components/ImageModal/CloseButton/CloseButton';
import { ImageCaption } from '~components/ImageModal/ImageCaption/ImageCaption';
import { getDimensions } from '~components/ImageModal/ImageModal.helpers';
import {
	useCloseOnEscape,
	useScrollLock,
} from '~components/ImageModal/ImageModal.hooks';
import { LeftModalArrow } from '~components/ImageModal/LeftModalArrow/LeftModalArrow';
import { RightModalArrow } from '~components/ImageModal/RightModalArrow/RightModalArrow';

import styles from './ImageModal.module.scss';

export const ImageModal = ({
	alt,
	caption,
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

	// Render in a portal on document.body so the fixed-position modal isn't
	// trapped or clipped by an ancestor's stacking context / clip-path / transform
	// (e.g. the clip-path on MotionListItem was clipping it to the list item box).
	return createPortal(
		<div className={styles.imageModal} onClick={onClose}>
			<div className={styles.imageModalInner}>
				{onPrev && <LeftModalArrow onClick={onPrev} />}

				<div className={styles.imageWrapper}>
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
					{caption && <ImageCaption size="lg">{caption}</ImageCaption>}
				</div>

				{onNext && <RightModalArrow onClick={onNext} />}

				<CloseButton onClick={onClose} />
			</div>
		</div>,
		document.body,
	);
};

type ImageModalProps = {
	alt?: string;
	caption?: string;
	dimensions: number[];
	onClose: () => void;
	onNext?: () => void;
	onPrev?: () => void;
	src: string;
};
