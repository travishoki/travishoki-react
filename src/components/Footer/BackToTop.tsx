import React from 'react';

export const BackToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return <i className="circ-sm fa fa-angle-up" onClick={scrollToTop} />;
};
