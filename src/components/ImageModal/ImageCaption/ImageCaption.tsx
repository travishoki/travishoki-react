import React, { useState } from 'react';

import { faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children, size = 'sm' }: ImageCaptionProps) => {
	const [visible, setVisible] = useState(true);

	const toggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		setVisible((v) => !v);
	};

	const buttonClass = size === 'sm' ? styles.buttonShowSm : styles.buttonShowLg;

	if (!visible) {
		return (
			<ButtonIcon
				className={classNames(styles.buttonShow, buttonClass)}
				icon={faCircleInfo}
				label="Show Caption"
				onClick={toggle}
				size={size}
			/>
		);
	}

	return (
		<div className={size === 'sm' ? styles.captionSm : styles.captionLg}>
			{children}
			<ButtonIcon
				className={classNames(styles.buttonHide, buttonClass)}
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
