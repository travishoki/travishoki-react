import React from 'react';

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
		<i className="fa fa-close" />
	</button>
);

type CloseButtonProps = {
	onClick: () => void;
};
