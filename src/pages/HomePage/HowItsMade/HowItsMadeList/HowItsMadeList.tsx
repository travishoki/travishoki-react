import React from 'react';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { useIsMobile } from '~helpers/useIsMobile';

import { COLLAPSED_COUNT, ITEMS } from './const';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	const isMobile = useIsMobile();

	return (
		<ReadMoreList
			buttonClassName={styles['how-its-made-read-more']}
			collapsedCount={isMobile ? COLLAPSED_COUNT : ITEMS.length}
			items={ITEMS}
			listClassName={styles['how-its-made-list']}
		/>
	);
};
