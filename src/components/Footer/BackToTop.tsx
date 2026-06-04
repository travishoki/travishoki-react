import React, { useEffect, useState } from 'react';

import './BackToTop.scss';

export const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 200);

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<button
			className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
			onClick={scrollToTop}
		>
			<i className="fa fa-chevron-up" />
		</button>
	);
};
