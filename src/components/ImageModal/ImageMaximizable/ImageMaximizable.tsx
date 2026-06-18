import React, { SyntheticEvent } from 'react';

import classNames from 'classnames';

import { DivMaybeAnimateScale } from '~animations/DivMaybeAnimateScale';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';
import { OverlayWithIcon } from '~components/OverlayWithIcon/OverlayWithIcon';

import styles from './ImageMaximizable.module.scss';

export const ImageMaximizable = ({
	alt,
	animate = false,
	className,
	dimensions,
	imageClassName,
	setDimensions,
	src,
	srcLarge,
	srcLargeDimensions,
}: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	const height = dimensions[1];
	const width = dimensions[0];

	const onLoad = (event: SyntheticEvent<HTMLImageElement>) => {
		if (setDimensions) {
			setDimensions([
				event.currentTarget.naturalWidth,
				event.currentTarget.naturalHeight,
			]);
		}
	};

	return (
		<>
			{selectedImg && (
				<ImageModal
					alt={alt}
					dimensions={srcLargeDimensions ?? dimensions}
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
				/>
			)}

			<DivMaybeAnimateScale
				animate={animate}
				className={classNames(styles.imageMaximizable, className)}
			>
				<OverlayWithIcon onClick={() => onClickImage(src)} />
				<img
					alt={alt}
					className={imageClassName}
					height={height}
					onLoad={onLoad}
					src={src}
					width={width}
				/>
			</DivMaybeAnimateScale>
		</>
	);
};

type ImageMaximizableProps = {
	alt: string;
	animate?: boolean;
	className?: string;
	dimensions: number[];
	imageClassName?: string;
	setDimensions?: (size: number[]) => void;
	src: string;
	srcLarge?: string;
	srcLargeDimensions?: number[];
};
