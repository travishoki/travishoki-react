import React, { useState } from 'react';

import { MotionExpand } from 'src/animations/MotionExpand';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { TechCatalogueHeader } from '../../TechCatalogueHeader/TechCatalogueHeader';
import { TechCatalogueList } from '../TechCatalogueList/TechCatalogueList';

import styles from './TechCatalogueSectionGroup.module.scss';

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

			<MotionExpand isOpen={open}>
				<TechCatalogueList
					expanded={expanded}
					iconClassName={iconClassName}
					itemClassName={itemClassName}
					items={items}
				/>
			</MotionExpand>
		</div>
	);
};

type TechCatalogueSectionGroupProps = {
	expanded: boolean;
	iconClassName: string;
	itemClassName?: string;
	items: TechCatalogueItemData[];
	label: string;
};
