import React, { useState } from 'react';

import { ButtonHide } from './ButtonHide/ButtonHide';
import { ButtonShow } from './ButtonShow/ButtonShow';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children, size = 'sm' }: ImageCaptionProps) => {
	const [visible, setVisible] = useState(true);

	const isSmall = size === 'sm';

	if (!visible) {
		return <ButtonShow onClick={() => setVisible(true)} size={size} />;
	}

	return (
		<div className={isSmall ? styles.captionSm : styles.captionLg}>
			{children}
			<ButtonHide onClick={() => setVisible(false)} size={size} />
		</div>
	);
};

type ImageCaptionProps = {
	children: React.ReactNode;
	size?: 'sm' | 'lg';
};
