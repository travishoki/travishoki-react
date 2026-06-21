import React from 'react';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { ButtonIcon } from '~components/ImageModal/ButtonIcon/ButtonIcon';

import styles from './ButtonShow.module.scss';

export const ButtonShow = ({ onClick, size }: ButtonShowProps) => (
	<ButtonIcon
		className={size === 'sm' ? styles.sm : styles.lg}
		icon={faCircleInfo}
		label="Show Caption"
		onClick={onClick}
		size={size}
	/>
);

type ButtonShowProps = {
	onClick: () => void;
	size: 'sm' | 'lg';
};
