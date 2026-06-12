import React, { useEffect, useState } from 'react';

import styles from './BackToTop.module.scss';

const SCROLL_DISTANCE = 200;

export const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > SCROLL_DISTANCE);

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<button
			aria-label="Scroll to Top"
			className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
			onClick={scrollToTop}
		>
			<i className="fa fa-chevron-up" />
		</button>
	);
};
