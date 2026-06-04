import React, { useState } from 'react';

import classnames from 'classnames';

import { TechCatalogueSectionGroup } from './TechCatalogueSectionGroup/TechCatalogueSectionGroup';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from './TechCatalogueList/TechCatalogueList';
import { groupTechByType } from './TechCatalogue.utils';
import './TechCatalogue.scss';

export type TechType =
	| 'frontend'
	| 'backend'
	| 'cms'
	| 'tool'
	| 'integrations'
	| 'legacy'
	| 'design'
	| 'illustration'
	| 'video';

export type TechCatalogueItemData = {
	image: string;
	label: string;
	to?: string;
	type?: TechType;
};

type TechCatalogueProps = {
	circle?: boolean;
	header: string;
	initialExpanded?: boolean;
	itemClassName?: string;
	items: TechCatalogueItemData[];
};

const TYPE_SECTIONS: { label: string; type: TechType }[] = [
	{ label: 'Frontend', type: 'frontend' },
	{ label: 'Backend', type: 'backend' },
	{ label: 'Content Management System', type: 'cms' },
	{ label: 'Tools', type: 'tool' },
	{ label: 'Integrations', type: 'integrations' },
	{ label: 'Legacy Tech', type: 'legacy' },
	{ label: 'Design', type: 'design' },
	{ label: 'Illustration', type: 'illustration' },
	{ label: 'Video', type: 'video' },
];

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
			<TechCatalogueHeader header={header} />
			<div className="tech-catalogue-content p-2">
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
