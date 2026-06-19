import React from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import { TechCatalogueIcon } from './TechCatalogueIcon/TechCatalogueIcon';
import {
	LEVEL,
	ProficiencyLevel,
	TechCatalogueItemData,
} from '../../../TechCatalogue.types';

import styles from './TechCatalogueItem.module.scss';

const TRANSITION = { duration: 0.3, ease: 'easeInOut' } as const;

const LEVEL_INFO: Record<
	ProficiencyLevel,
	{ className: string; label: string }
> = {
	[LEVEL.ADVANCED]: { className: styles.levelAdvanced, label: 'Advanced' },
	[LEVEL.EXPERT]: { className: styles.levelExpert, label: 'Expert' },
	[LEVEL.NOVICE]: { className: styles.levelNovice, label: 'Novice' },
};

export const TechCatalogueItem = ({
	expanded,
	item,
}: TechCatalogueItemProps) => {
	const { image, label, legacy = false, level } = item;

	return (
		// `layout="position"` glides the item to its new spot when the list
		// switches between the collapsed row and the expanded grid, without
		// scaling (which would distort the fixed-size icon).
		<motion.li
			className={styles.techCatalogueItem}
			data-tooltip={expanded ? undefined : label}
			layout="position"
			transition={TRANSITION}
		>
			<TechCatalogueIcon
				alt={`${label} Logo Icon`}
				legacy={legacy}
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
