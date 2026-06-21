import React, { InputHTMLAttributes } from 'react';

import styles from './FilterForm.module.scss';

export const FilterForm = (props: InputHTMLAttributes<HTMLInputElement>) => (
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
