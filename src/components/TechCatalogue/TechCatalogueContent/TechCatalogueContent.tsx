import React from 'react';

import { MotionAutoHeight } from '~animations/MotionAutoHeight';
import { TYPE_SECTIONS } from '~components/TechCatalogue/TechCatalogue.const';
import { groupTechByType } from '~components/TechCatalogue/TechCatalogue.helpers';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';

import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';

import styles from './TechCatalogueContent.module.scss';

export const TechCatalogueContent = ({ expanded, items }: ContentProps) => {
	if (items.length === 0) return null;

	const groupedTech = groupTechByType(items);

	return (
		<div className={styles.techCatalogueContent}>
			<MotionAutoHeight trigger={expanded}>
				{expanded ? (
					<div className={styles.techCatalogueContentExpended}>
						{TYPE_SECTIONS.map(({ label, type }) => {
							const group = groupedTech[type];

							if (group.length === 0) return null;

							return (
								<TechCatalogueSectionGroup
									key={type}
									items={group}
									title={label}
								/>
							);
						})}
					</div>
				) : (
					<div className={styles.techCatalogueContentCollapsed}>
						<TechCatalogueList expanded={expanded} items={items} />
					</div>
				)}
			</MotionAutoHeight>
		</div>
	);
};

type ContentProps = {
	expanded: boolean;
	items: TechCatalogueItemData[];
};
