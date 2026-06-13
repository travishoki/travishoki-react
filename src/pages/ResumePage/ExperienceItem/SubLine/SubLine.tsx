import React from 'react';

import styles from './SubLine.module.scss';

export const SubLine = ({ dateEnd, dateStart, position }: SubLineProps) => (
	<div className={styles.subLine}>
		<h4>{position}</h4>
		<p className={styles.date}>
			{dateStart} - {dateEnd}
		</p>
	</div>
);

type SubLineProps = {
	dateEnd: string;
	dateStart: string;
	position: string;
};
