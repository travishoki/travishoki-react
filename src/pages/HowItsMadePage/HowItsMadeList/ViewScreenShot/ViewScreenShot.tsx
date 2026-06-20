import React, { useState } from 'react';

import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';

import styles from './ViewScreenShot.module.scss';

export const ViewScreenShot = ({
	alt,
	dimensions,
	src,
}: ViewScreenShotProps) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{modalOpen && (
				<ImageModal
					alt={alt}
					dimensions={dimensions}
					onClose={() => setModalOpen(false)}
					src={src}
				/>
			)}

			<FontAwesomeIcon
				className={classNames(styles.viewScreenShot)}
				icon={faImage}
				onClick={() => setModalOpen(true)}
			/>
		</>
	);
};

type ViewScreenShotProps = {
	alt: string;
	dimensions: number[];
	src: string;
};
