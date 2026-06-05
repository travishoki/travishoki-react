import React, { useState } from 'react';

import { TechCatalogueItemData } from '../TechCatalogue.types';
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
			<button
				className="tech-catalogue-section-label px-3 py-2"
				onClick={() => setOpen(!open)}
			>
				{label}
				<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
			</button>

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
