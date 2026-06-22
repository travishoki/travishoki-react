import React from 'react';

import classNames from 'classnames';

import styles from './BulletedList.module.scss';

export const BulletedList = ({ list }: BulletedListProps) => (
	<ul className={classNames('mb-2', styles.bulleted)}>
		{list.map((item, index) => (
			<li key={`${index}-${item}`} className={styles.bulletedItem}>
				{item}
			</li>
		))}
	</ul>
);

type BulletedListProps = {
	list: string[];
};
