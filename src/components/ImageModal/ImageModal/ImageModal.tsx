import React, { useState } from 'react';

import { getDimensions } from '../ImageModal.helpers';
import { useCloseOnEscape, useScrollLock } from '../ImageModal.hooks';
import { CloseButton } from '../CloseButton/CloseButton';
import { LeftModalArrow } from '../LeftModalArrow/LeftModalArrow';
import { RightModalArrow } from '../RightModalArrow/RightModalArrow';
import './ImageModal.scss';

export const ImageModal = ({
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
		<div className="image-modal" onClick={onClose}>
			<div className="image-modal-inner">
				{onPrev && <LeftModalArrow onClick={onPrev} />}

				<img
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
	dimensions: number[];
	onClose: () => void;
	onNext?: () => void;
	onPrev?: () => void;
	src: string;
};
