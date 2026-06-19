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

const LEVEL_INFO: Record<
	ProficiencyLevel,
	{ className: string; label: string }
> = {
	[LEVELS.ADVANCED]: { className: styles.levelAdvanced, label: 'Advanced' },
	[LEVELS.EXPERT]: { className: styles.levelExpert, label: 'Expert' },
	[LEVELS.NOVICE]: { className: styles.levelNovice, label: 'Novice' },
};

export const TechCatalogueItem = ({
	expanded,
	item,
}: TechCatalogueItemProps) => {
	const { image, label, legacy = false, level } = item;
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
			<img
				alt={`${label} Logo Icon`}
				className={classNames(iconClassName, {
					[styles.blackAndWhite]: legacy,
				})}
				src={image}
			/>

			{expanded && (
				<div className={styles.labalContainer}>
					<p
						className={classNames(styles.label, {
							[styles.crossedOut]: legacy,
						})}
					>
						{label}
					</p>
					{level && (
						<span
							className={classNames(
								styles.levelPill,
								LEVEL_INFO[level].className,
							)}
						>
							{LEVEL_INFO[level].label}
						</span>
					)}
				</div>
			)}
		</motion.li>
	);
};

type TechCatalogueItemProps = {
	expanded: boolean;
	item: TechCatalogueItemData;
};
