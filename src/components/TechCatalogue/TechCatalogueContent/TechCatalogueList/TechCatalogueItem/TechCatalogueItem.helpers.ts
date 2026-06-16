import styles from './TechCatalogueItem.module.scss';

export const getExpandedStyle = (columns: number) => {
	/* eslint-disable no-magic-numbers */
	if (columns === 2) return styles.techCatalogueItemExpandedTwo;
	if (columns === 3) return styles.techCatalogueItemExpandedThree;
	/* eslint-enable no-magic-numbers */

	return styles.techCatalogueItemExpandedOne;
};
