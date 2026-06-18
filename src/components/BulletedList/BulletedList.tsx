import React from 'react';

import styles from './BulletedList.module.scss';

export const BulletedList = ({ list }: BulletedListProps) => (
	<ul className={`${styles.bulleted} mb-2`}>
		{list.map((item, index) => (
			<li key={index} className={styles.bulletedItem}>
				{item}
			</li>
		))}
	</ul>
);

type BulletedListProps = {
	list: string[];
};
