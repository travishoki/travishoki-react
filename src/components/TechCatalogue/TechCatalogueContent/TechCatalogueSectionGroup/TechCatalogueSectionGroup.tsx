import React, { useState } from 'react';

import { MotionAutoHeight } from 'src/animations/MotionAutoHeight';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { TechCatalogueHeader } from '../../TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from '../TechCatalogueList/TechCatalogueList';

export const TechCatalogueSectionGroup = ({
	items,
	title,
}: TechCatalogueSectionGroupProps) => {
	const [open, setOpen] = useState(true);

	return (
		<div>
			<TechCatalogueHeader
				onToggle={() => setOpen(!open)}
				open={open}
				title={title}
			/>

			{/* Collapsing a section keeps the icons visible as a compact horizontal
			    row (labels hidden), rather than hiding the section entirely. */}
			<MotionAutoHeight trigger={open}>
				<TechCatalogueList expanded={open} items={items} />
			</MotionAutoHeight>
		</div>
	);
};

type TechCatalogueSectionGroupProps = {
	items: TechCatalogueItemData[];
	title: string;
};
