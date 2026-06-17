import React from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import { useCircle } from '~components/TechCatalogue/TechCatalogueContext';

import {
	LEVELS,
	ProficiencyLevel,
	TechCatalogueItemData,
} from '../../../TechCatalogue.types';

import styles from './TechCatalogueItem.module.scss';

const TRANSITION = { duration: 0.3, ease: 'easeInOut' } as const;

const LEVEL_LABEL: Record<ProficiencyLevel, string> = {
	[LEVELS.ADVANCED]: 'Advanced',
	[LEVELS.BEGINNER]: 'Beginner',
	[LEVELS.EXPERT]: 'Expert',
};

const LEVEL_CLASS: Record<ProficiencyLevel, string> = {
	[LEVELS.ADVANCED]: styles.levelAdvanced,
	[LEVELS.BEGINNER]: styles.levelBeginner,
	[LEVELS.EXPERT]: styles.levelExpert,
};

export const TechCatalogueItem = ({
	expanded,
	image,
	label,
	level,
}: TechCatalogueItemProps) => {
	const circle = useCircle();

	const itemClassName = classNames(styles.techCatalogueItem);

	// Derived from the circle context here at the leaf.
	const iconClassName = classNames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

	return (
		// `layout="position"` glides the item to its new spot when the list
		// switches between the collapsed row and the expanded grid, without
		// scaling (which would distort the fixed-size icon).
		<motion.li
			className={itemClassName}
			data-tooltip={expanded ? undefined : label}
			layout="position"
			transition={TRANSITION}
		>
			<img alt={`${label} Logo Icon`} className={iconClassName} src={image} />

			{expanded && (
				<div className={styles.labalContainer}>
					<p className={styles.label}>{label}</p>
					{level && (
						<span className={classNames(styles.levelPill, LEVEL_CLASS[level])}>
							{LEVEL_LABEL[level]}
						</span>
					)}
				</div>
			)}
		</motion.li>
	);
};

type TechCatalogueItemProps = TechCatalogueItemData & {
	expanded: boolean;
};
