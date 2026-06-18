import React, { useState } from 'react';

import { MotionAutoHeight } from '~animations/MotionAutoHeight';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';
import { TechCatalogueList } from '~components/TechCatalogue/TechCatalogueContent/TechCatalogueList/TechCatalogueList';
import { TechCatalogueHeader } from '~components/TechCatalogue/TechCatalogueHeader/TechCatalogueHeader';

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
