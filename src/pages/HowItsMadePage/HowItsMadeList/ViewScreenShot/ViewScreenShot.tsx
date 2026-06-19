import React, { useState } from 'react';

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

			<i
				className={classNames('fa fa-image', styles.viewScreenShot)}
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
