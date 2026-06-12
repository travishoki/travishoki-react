import React, { useState } from 'react';

import classnames from 'classnames';

import { TYPE_SECTIONS } from './TechCatalogue.const';
import { groupTechByType } from './TechCatalogue.helpers';
import { TechCatalogueItemData } from './TechCatalogue.types';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';

import styles from './TechCatalogue.module.scss';

type TechCatalogueProps = {
	circle?: boolean;
	header: string;
	initialExpanded?: boolean;
	itemClassName?: string;
	items: TechCatalogueItemData[];
};

export const TechCatalogue = ({
	circle = false,
	header,
	initialExpanded = false,
	itemClassName,
	items,
}: TechCatalogueProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	const iconClass = classnames(
		styles.techCatalogueIcon,
		circle ? styles.techCatalogueIconCircle : '',
	);

	const groupedTech = groupTechByType(items);

	return (
		<div className={classnames(styles.techCatalogue, 'mb-3')}>
			<TechCatalogueHeader
				label={header}
				onToggle={() => setExpanded(!expanded)}
				open={expanded}
			/>
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
			<TechCatalogueButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
		</div>
	);
};
