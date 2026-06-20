import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CloseButton.module.scss';

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<button
		aria-label="Close Button"
		className={styles.closeIcon}
		onClick={(event) => {
			event.stopPropagation();
			onClick();
		}}
	>
		<FontAwesomeIcon icon={faXmark} />
	</button>
);

type CloseButtonProps = {
	onClick: () => void;
};
