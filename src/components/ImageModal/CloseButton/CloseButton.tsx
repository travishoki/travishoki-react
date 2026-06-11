import React from 'react';

import styles from './CloseButton.module.scss';

type CloseButtonProps = {
	onClick: () => void;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<button
		className={styles.closeIcon}
		onClick={(event) => {
			event.stopPropagation();
			onClick();
		}}
	>
		<i className="fa fa-close" />
	</button>
);
