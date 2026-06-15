import React from 'react';

import classNames from 'classnames';

import { useCircle } from '../../../../TechCatalogueContext';

import styles from './TechCatalogueItemContent.module.scss';

export const TechCatalogueItemContent = ({
	expanded,
	image,
	label,
}: TechCatalogueItemContentProps) => {
	const circle = useCircle();

	// Derived from the circle context here at the leaf.
	const iconClassName = classNames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

	return (
		<>
			<img alt={`${label} Logo Icon`} className={iconClassName} src={image} />
			{expanded && <p className={styles.label}>{label}</p>}
		</>
	);
};

type TechCatalogueItemContentProps = {
	expanded: boolean;
	image: string;
	label: string;
};
