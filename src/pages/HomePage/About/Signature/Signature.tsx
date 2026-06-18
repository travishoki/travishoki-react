import React from 'react';

import ImgSignature from '~images/signature/signature-travis-white.png';

import styles from './Signature.module.scss';

export const Signature = () => (
	<div className={styles.signature}>
		<p className={styles.dash}>-</p>
		<img
			alt="Travis Hoki"
			className={styles.signatureImage}
			height="64"
			src={ImgSignature}
			width="100"
		/>
	</div>
);
