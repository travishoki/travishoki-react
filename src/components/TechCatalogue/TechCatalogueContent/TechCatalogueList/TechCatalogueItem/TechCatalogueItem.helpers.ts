import {
	COLUMNS_THREE,
	COLUMNS_TWO,
	MAX_COLUMNS,
} from '../TechCatalogueList.const';

import styles from './TechCatalogueItem.module.scss';

export const getExpandedStyle = (columns: number) => {
	if (columns === COLUMNS_TWO) return styles.techCatalogueItemExpandedTwo;
	if (columns === COLUMNS_THREE) return styles.techCatalogueItemExpandedThree;

	return styles.techCatalogueItemExpandedOne;
};

export const clamp = (num: number) => {
	if (num > MAX_COLUMNS) return MAX_COLUMNS;

	return num;
};
