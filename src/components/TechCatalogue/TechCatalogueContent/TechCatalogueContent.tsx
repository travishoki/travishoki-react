import React from 'react';

import classnames from 'classnames';

import { TYPE_SECTIONS } from '../TechCatalogue.const';
import { groupTechByType } from '../TechCatalogue.helpers';
import { TechCatalogueItemData } from '../TechCatalogue.types';
import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';

import styles from './TechCatalogueContent.module.scss';

type ContentProps = {
	circle: boolean;
	expanded: boolean;
	itemClassName?: string;
	items: TechCatalogueItemData[];
};

export const TechCatalogueContent = ({
	circle,
	expanded,
	itemClassName,
	items,
}: ContentProps) => {
	if (items.length === 0) return null;

	const iconClass = classnames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

	const groupedTech = groupTechByType(items);

	return (
		<div className={styles.techCatalogueContent}>
			<div
				className={
					expanded
						? styles.techCatalogueVertical
						: styles.techCatalogueHorizontal
				}
			>
				{expanded ? (
					TYPE_SECTIONS.map(({ label, type }) => {
						const group = groupedTech[type];

						if (group.length === 0) return null;

						return (
							<TechCatalogueSectionGroup
								key={type}
								expanded={expanded}
								iconClass={iconClass}
								itemClassName={itemClassName}
								items={group}
								label={label}
							/>
						);
					})
				) : (
					<TechCatalogueList
						expanded={expanded}
						iconClass={iconClass}
						items={items}
					/>
				)}
			</div>
		</div>
	);
};
