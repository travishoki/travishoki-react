import React, { useState } from 'react';

import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children, size = 'sm' }: ImageCaptionProps) => {
	const [visible, setVisible] = useState(true);

	const toggle = () => {
		setVisible((v) => !v);
	};

	const isSmall = size === 'sm';

	if (!visible) {
		return (
			<ButtonIcon
				className={isSmall ? styles.buttonShowSm : styles.buttonShowLg}
				icon={faCircleInfo}
				label="Show Caption"
				onClick={toggle}
				size={size}
			/>
		);
	}

	return (
		<div className={isSmall ? styles.captionSm : styles.captionLg}>
			{children}
			<ButtonIcon
				className={isSmall ? styles.buttonHideSm : styles.buttonHideLg}
				icon={faXmark}
				label="Hide Caption"
				onClick={toggle}
				size={size}
			/>
		</div>
	);
};

type ImageCaptionProps = {
	children: React.ReactNode;
	size?: 'sm' | 'lg';
};
