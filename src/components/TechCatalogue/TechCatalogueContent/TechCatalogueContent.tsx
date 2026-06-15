import React from 'react';

import classnames from 'classnames';
import { MotionAutoHeight } from 'src/animations/MotionAutoHeight';

import { TYPE_SECTIONS } from '../TechCatalogue.const';
import { groupTechByType } from '../TechCatalogue.helpers';
import { TechCatalogueItemData } from '../TechCatalogue.types';
import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';

import styles from './TechCatalogueContent.module.scss';

export const TechCatalogueContent = ({
	circle,
	expanded,
	itemClassName,
	items,
}: ContentProps) => {
	if (items.length === 0) return null;

	const iconClassName = classnames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

	const groupedTech = groupTechByType(items);

	return (
		<div className={styles.techCatalogueContent}>
			<MotionAutoHeight trigger={expanded}>
				{expanded ? (
					TYPE_SECTIONS.map(({ label, type }) => {
						const group = groupedTech[type];

						if (group.length === 0) return null;

						return (
							<TechCatalogueSectionGroup
								key={type}
								iconClassName={iconClassName}
								itemClassName={itemClassName}
								items={group}
								title={label}
							/>
						);
					})
				) : (
					<div className={styles.techCatalogueHorizontal}>
						<TechCatalogueList
							expanded={expanded}
							iconClassName={iconClassName}
							items={items}
						/>
					</div>
				)}
			</MotionAutoHeight>
		</div>
	);
};

type ContentProps = {
	circle: boolean;
	expanded: boolean;
	itemClassName?: string;
	items: TechCatalogueItemData[];
};
