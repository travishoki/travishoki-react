import React, { useState } from 'react';

import { getDimensions } from './ImageModal.helpers';
import {
	useArrowKeyNavigation,
	useCloseOnEscape,
	useScrollLock,
} from './ImageModal.hooks';
import { CloseButton } from './CloseButton';
import { ModalArrow } from './ModalArrow';
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
	useArrowKeyNavigation(onPrev, onNext);

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
				{onPrev && <ModalArrow direction="prev" onClick={onPrev} />}

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

				{onNext && <ModalArrow direction="next" onClick={onNext} />}

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
