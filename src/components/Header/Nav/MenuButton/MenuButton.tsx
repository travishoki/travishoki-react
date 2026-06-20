import React from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './MenuButton.module.scss';

export const MenuButton = ({ onClick }: MenuButtonProps) => {
	return (
		<div className={styles.menuBtn}>
			<FontAwesomeIcon
				className={styles.mobileMenuIcon}
				icon={faBars}
				onClick={onClick}
			/>
		</div>
	);
};

type MenuButtonProps = {
	onClick: () => void;
};
