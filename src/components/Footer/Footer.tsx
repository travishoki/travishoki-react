import React from 'react';

import classNames from 'classnames';

import { BackToTop } from './BackToTop/BackToTop';
import { SubFooter } from './SubFooter/SubFooter';

import styles from './Footer.module.scss';

const YEAR = new Date().getFullYear();
export const Footer = () => (
	<>
		<SubFooter />
		<div className={classNames('center', styles.footer)}>
			<p>©{YEAR} Travishoki.com All Rights Reserved</p>
			<BackToTop />
		</div>
	</>
);
