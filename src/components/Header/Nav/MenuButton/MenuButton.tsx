import React from 'react';

import classNames from 'classnames';

import styles from './MenuButton.module.scss';

export const MenuButton = ({ onClick }: MenuButtonProps) => {
	return (
		<div className={styles.menuBtn}>
			<i
				className={classNames('fa fa-bars', styles.mobileMenuIcon)}
				onClick={onClick}
			/>
		</div>
	);
};

type MenuButtonProps = {
	onClick: () => void;
};
