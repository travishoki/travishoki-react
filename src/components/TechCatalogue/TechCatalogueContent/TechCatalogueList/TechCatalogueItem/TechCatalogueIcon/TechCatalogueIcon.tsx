import React from 'react';

import classNames from 'classnames';

import { useCircle } from '~components/TechCatalogue/TechCatalogueContext';

import styles from './TechCatalogueIcon.module.scss';

export const TechCatalogueIcon = ({
	alt,
	legacy,
	src,
}: TechCatalogueIconProps) => {
	const circle = useCircle();

	return (
		<img
			alt={alt}
			className={classNames(styles.icon, {
				[styles.circle]: circle,
				[styles.rounded]: !circle,
				[styles.blackAndWhite]: legacy,
			})}
			src={src}
		/>
	);
};

type TechCatalogueIconProps = {
	alt: string;
	legacy?: boolean;
	src: string;
};
