import React from 'react';

import { motion } from 'motion/react';

import styles from './Logo.module.scss';

export const Logo = () => (
	<motion.a
		animate={{ scale: 1 }}
		className={styles.link}
		exit={{ scale: 0.5 }}
		href="https://hokiskateboards.com"
		initial={{ scale: 0.5 }}
		rel="noreferrer"
		target="_blank"
		title="Hoki Skateboards"
		transition={{ duration: 0.3, ease: 'easeInOut' }}
	>
		<img
			alt="Hoki Skateboards"
			className="center"
			height="142px"
			src="http://links.hokiskateboards.com/images/logo.png"
			width="275px"
		/>
	</motion.a>
);
