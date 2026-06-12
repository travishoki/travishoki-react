import React, { useState } from 'react';

import classnames from 'classnames';

import { TechCatalogueItemData } from './TechCatalogue.types';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueContent } from './TechCatalogueContent/TechCatalogueContent';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';

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

	return (
		<div className={classnames(styles.techCatalogue, 'mb-3')}>
			<TechCatalogueHeader
				label={header}
				onToggle={() => setExpanded(!expanded)}
				open={expanded}
			/>
			<TechCatalogueContent
				circle={circle}
				expanded={expanded}
				itemClassName={itemClassName}
				items={items}
			/>
			<TechCatalogueButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
		</div>
	);
};
