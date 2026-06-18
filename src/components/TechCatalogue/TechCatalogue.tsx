import React, { useState } from 'react';

import classNames from 'classnames';

import { TechCatalogueItemData } from './TechCatalogue.types';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueContent } from './TechCatalogueContent/TechCatalogueContent';
import { TechCatalogueProvider } from './TechCatalogueContext';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';

import styles from './TechCatalogue.module.scss';

export const TechCatalogue = ({
	circle = false,
	initialExpanded = false,
	items,
	title,
}: TechCatalogueProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	return (
		<div className={styles.techCatalogue}>
			<TechCatalogueHeader
				onToggle={() => setExpanded(!expanded)}
				open={expanded}
				title={title}
			/>
			<TechCatalogueProvider value={{ circle }}>
				<TechCatalogueContent expanded={expanded} items={items} />
			</TechCatalogueProvider>
			<TechCatalogueButton
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
		</div>
	);
};

type TechCatalogueProps = {
	circle?: boolean;
	initialExpanded?: boolean;
	items: TechCatalogueItemData[];
	title: string;
};
