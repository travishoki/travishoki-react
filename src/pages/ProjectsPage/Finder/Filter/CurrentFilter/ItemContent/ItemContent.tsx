import React from 'react';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechKey } from '~const/Tech.const';

import styles from './ItemContent.module.scss';

export const ItemContent = ({ label, techKey }: ItemContentProps) => (
	<div className={styles.content}>
		<TechIcon name={techKey} />
		<p className={styles.label}>{label}</p>
	</div>
);

type ItemContentProps = {
	label: string;
	techKey: TechKey;
};
