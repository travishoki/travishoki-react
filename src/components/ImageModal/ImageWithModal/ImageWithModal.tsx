import React, { useState } from 'react';

import classNames from 'classnames';

import { ImageModal } from '../ImageModal/ImageModal';
import { useImageModal } from '../useImageModal';

import styles from './ImageWithModal.module.scss';

type ImageWithModalProps = {
	alt?: string;
	className?: string;
	onError?: React.ReactEventHandler<HTMLImageElement>;
	src: string;
};

export const ImageWithModal = ({
	alt,
	className,
	onError,
	src,
}: ImageWithModalProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);

	return (
		<>
			{selectedImg && (
				<ImageModal
					dimensions={dimensions}
					onClose={onCloseImage}
					src={selectedImg}
				/>
			)}

			<img
				alt={alt}
				className={classNames(styles.imageWithModal, className)}
				onClick={(event) => {
					const img = event.currentTarget;
					setDimensions([img.naturalWidth, img.naturalHeight]);
					onClickImage(src);
				}}
				onError={onError}
				src={src}
			/>
		</>
	);
};
