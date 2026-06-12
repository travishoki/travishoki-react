import React from 'react';

import styles from './MenuButton.module.scss';

export const MenuButton = ({ onClick }: MenuButtonProps) => {
	return (
		<div className={styles.menuBtn}>
			<i className={`fa fa-bars ${styles.mobileMenuIcon}`} onClick={onClick} />
		</div>
	);
};

type MenuButtonProps = {
	onClick: () => void;
};
