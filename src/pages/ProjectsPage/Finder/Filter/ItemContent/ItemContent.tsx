import React from 'react';

import classNames from 'classnames';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechFilterType, TechKey } from '~const/Tech.const';

import styles from './ItemContent.module.scss';

export const ItemContent = ({
	className,
	label,
	onClick,
	techKey,
}: ItemContentProps) => (
	<div
		className={classNames(styles.content, className)}
		onClick={() => onClick && onClick(techKey)}
	>
		{techKey && techKey !== 'all' && techKey !== 'null' && (
			<TechIcon name={techKey as TechKey} />
		)}
		<p className={styles.label}>{label}</p>
	</div>
);

type ItemContentProps = {
	className?: string;
	label: TechFilterType;
	onClick?: (filter: TechFilterType) => void;
	techKey: TechFilterType;
};
