import React, { ReactNode } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CurrentFilterBase.module.scss';

export const CurrentFilterBase = ({
	children,
	icon,
	onClickIcon,
}: CurrentFilterBaseProps) => (
	<div className={styles.currentFilterBase}>
		<div className={styles.content}>{children}</div>
		<FontAwesomeIcon
			className={styles.icon}
			icon={icon}
			onClick={onClickIcon}
		/>
	</div>
);

type CurrentFilterBaseProps = {
	children: ReactNode;
	icon: IconDefinition;
	onClickIcon: () => void;
};
