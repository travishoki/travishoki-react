import React, { useState } from 'react';

import classnames from 'classnames';

import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { TYPE_SECTIONS } from './TechCatalogue.const';
import { TechCatalogueItemData } from './TechCatalogue.types';
import { groupTechByType } from './TechCatalogue.helpers';
import './TechCatalogue.scss';

export type TechCatalogueProps = {
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

	const iconClass = classnames('tech-catalogue-icon', { circle });

	const groupedTech = groupTechByType(items);

	return (
		<div className="tech-catalogue mb-3">
			<TechCatalogueHeader
				label={header}
				onToggle={() => setExpanded(!expanded)}
				open={expanded}
			/>
			<div className="tech-catalogue-content">
				<div
					className={
						expanded ? 'tech-catalogue-vertical' : 'tech-catalogue-horizontal'
					}
				>
					{expanded ? (
						TYPE_SECTIONS.map(({ label, type }) => {
							const group = groupedTech[type];

							if (group.length === 0) return null;

							return (
								<TechCatalogueSectionGroup
									key={type}
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
