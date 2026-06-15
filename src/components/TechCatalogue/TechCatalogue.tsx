import React, { useState } from 'react';

import classnames from 'classnames';

import { TechCatalogueItemData } from './TechCatalogue.types';
import { TechCatalogueButton } from './TechCatalogueButton/TechCatalogueButton';
import { TechCatalogueContent } from './TechCatalogueContent/TechCatalogueContent';
import { ItemClassNameProvider } from './TechCatalogueContext';
import { TechCatalogueHeader } from './TechCatalogueHeader/TechCatalogueHeader';

import styles from './TechCatalogue.module.scss';

export const TechCatalogue = ({
	circle = false,
	initialExpanded = false,
	itemClassName = 'col-12',
	items,
	title,
}: TechCatalogueProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	return (
		<div className={classnames(styles.techCatalogue, 'mb-3')}>
			<TechCatalogueHeader
				onToggle={() => setExpanded(!expanded)}
				open={expanded}
				title={title}
			/>
			<ItemClassNameProvider value={itemClassName}>
				<TechCatalogueContent
					circle={circle}
					expanded={expanded}
					items={items}
				/>
			</ItemClassNameProvider>
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
	itemClassName?: string;
	items: TechCatalogueItemData[];
	title: string;
};
