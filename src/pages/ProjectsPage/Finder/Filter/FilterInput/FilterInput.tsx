import React, { InputHTMLAttributes } from 'react';

import styles from './FilterInput.module.scss';

export const FilterInput = (props: InputHTMLAttributes<HTMLInputElement>) => (
	<form className={styles.form}>
		<input
			className={styles.input}
			maxLength={25}
			placeholder="Filter by Tech"
			type="text"
			{...props}
		/>
	</form>
);
