import React, { useState } from 'react';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { TechCatalogueHeader } from '../../TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from '../TechCatalogueList/TechCatalogueList';

import styles from './TechCatalogueSectionGroup.module.scss';

type TechCatalogueSectionGroupProps = {
	expanded: boolean;
	iconClassName: string;
	itemClassName?: string;
	items: TechCatalogueItemData[];
	label: string;
};

export const TechCatalogueSectionGroup = ({
	expanded,
	iconClassName,
	itemClassName,
	items,
	label,
}: TechCatalogueSectionGroupProps) => {
	const [open, setOpen] = useState(true);

	return (
		<div className={styles.techCatalogueSectionGroup}>
			<TechCatalogueHeader
				label={label}
				onToggle={() => setOpen(!open)}
				open={open}
			/>

			{open && (
				<TechCatalogueList
					expanded={expanded}
					iconClassName={iconClassName}
					itemClassName={itemClassName}
					items={items}
				/>
			)}
		</div>
	);
};
