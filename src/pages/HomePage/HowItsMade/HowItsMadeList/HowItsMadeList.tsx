import React from 'react';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { useIsMobile } from '~helpers/useIsMobile';

import { COLLAPSED_COUNT, ITEMS } from './HowItsMadeList.const';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	const isMobile = useIsMobile();
	const collapsedCount = isMobile ? COLLAPSED_COUNT : ITEMS.length;

	return (
		<ReadMoreList
			collapsedCount={collapsedCount}
			items={ITEMS}
			listClassName={styles.howItsMadeList}
		/>
	);
};
