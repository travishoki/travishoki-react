import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

import styles from './CloseButton.module.scss';

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<ButtonIcon
		className={styles.closeIcon}
		icon={faXmark}
		label="Close Button"
		onClick={onClick}
		size="lg"
	/>
);

type CloseButtonProps = {
	onClick: () => void;
};
