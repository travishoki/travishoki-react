import React, { useState } from 'react';

import { TechCatalogueItemData } from '../TechCatalogue.types';
import { TechCatalogueHeader } from '../TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from '../TechCatalogueList/TechCatalogueList';

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
			<TechCatalogueHeader
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
