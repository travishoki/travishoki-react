import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ButtonIcon } from '~components/ImageModal/ButtonIcon/ButtonIcon';

import styles from './ButtonHide.module.scss';

export const ButtonHide = ({ onClick, size }: ButtonHideProps) => (
	<ButtonIcon
		className={size === 'sm' ? styles.sm : styles.lg}
		icon={faXmark}
		label="Hide Caption"
		onClick={onClick}
		size={size}
	/>
);

type ButtonHideProps = {
	onClick: () => void;
	size: 'sm' | 'lg';
};
