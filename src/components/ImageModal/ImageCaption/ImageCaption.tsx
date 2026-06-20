import React, { useState } from 'react';

import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children, size = 'sm' }: ImageCaptionProps) => {
	const [visible, setVisible] = useState(true);

	const toggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		setVisible((v) => !v);
	};

	if (!visible) {
		return (
			<button
				className={
					size === 'lg' ? styles.iconButtonBottomLg : styles.iconButtonBottom
				}
				onClick={toggle}
			>
				<FontAwesomeIcon icon={faCircleInfo} />
			</button>
		);
	}

	return (
		<div className={styles[size]}>
			{children}
			<button className={styles.iconButton} onClick={toggle}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	);
};

type ImageCaptionProps = {
	children: React.ReactNode;
	size?: 'sm' | 'lg';
};
