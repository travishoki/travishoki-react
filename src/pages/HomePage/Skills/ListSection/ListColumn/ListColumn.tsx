import React from 'react';

import styles from './ListColumn.module.scss';

export const ListColumn = ({ items }: ListColumnProps) => (
	<ul className={styles.listColumn}>
		{items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);

type ListColumnProps = {
	items: string[];
};
