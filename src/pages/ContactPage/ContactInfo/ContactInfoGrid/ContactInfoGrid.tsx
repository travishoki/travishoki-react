import React from 'react';

import classNames from 'classnames';

import styles from './ContactInfoGrid.module.scss';

export const ContactInfoGrid = () => (
	<div className={classNames(styles.contactInfoGrid, 'mb-4')}>
		<div className={classNames(styles.contactInfoItem, 'py-3 px-2')}>
			<i
				className={classNames('fa fa-envelope', styles.contactInfoIcon, 'mb-2')}
			/>
			<p>
				<a href="mailto:travis.hoki@gmail.com">travis.hoki@gmail.com</a>
			</p>
			<p className={styles.preferred}>(Preferred)</p>
		</div>

		<div className={classNames(styles.contactInfoItem, 'py-3 px-2')}>
			<i
				className={classNames('fa fa-phone', styles.contactInfoIcon, 'mb-2')}
			/>
			<p>
				<a href="tel:+18016912373">801-691-2373</a>
			</p>
		</div>

		<div className={classNames(styles.contactInfoItem, 'py-3 px-2')}>
			<i
				className={classNames(
					'fa fa-map-marker',
					styles.contactInfoIcon,
					'mb-2',
				)}
			/>
			<p>Pleasant Grove, Utah</p>
			<p>United States</p>
		</div>

		<div className={classNames(styles.contactInfoItem, 'py-3 px-2')}>
			<i
				className={classNames('fa fa-clock-o', styles.contactInfoIcon, 'mb-2')}
			/>
			<p>Open to remote work</p>
			<p>Mountain Time (MT)</p>
		</div>
	</div>
);
