import React, { useState } from 'react';

import { TechCatalogueItemData } from '../TechCatalogue.types';
import { TechCatalogueList } from '../TechCatalogueList/TechCatalogueList';
import { TechCatalogueSectionLabel } from '../TechCatalogueSectionLabel/TechCatalogueSectionLabel';

type TechCatalogueSectionGroupProps = {
	iconClass: string;
	itemClassName?: string;
	items: TechCatalogueItemData[];
	label: string;
};

export const TechCatalogueSectionGroup = ({
	iconClass,
	itemClassName,
	items,
	label,
}: TechCatalogueSectionGroupProps) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="tech-catalogue-section-group">
			<TechCatalogueSectionLabel
				label={label}
				onToggle={() => setOpen(!open)}
				open={open}
			/>

			{open && (
				<TechCatalogueList
					expanded
					iconClass={iconClass}
					itemClassName={itemClassName}
					items={items}
				/>
			)}
		</div>
	);
};
