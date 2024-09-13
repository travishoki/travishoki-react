import React from 'react';

import { scrollWindow } from './Footer.helpers';

const DELAY_IN_MS = 16.66;
const SCROLL_STEPS_IN_PX = 50;

export const BackToTop = () => {
	const scrollToTop = () => {
		const timer = setInterval(() => {
			if (window.pageYOffset === 0) {
				clearInterval(timer);
			}

			const yPosition = window.pageYOffset - SCROLL_STEPS_IN_PX;

			scrollWindow(0, yPosition);
		}, DELAY_IN_MS);
	};

	return <i className="circ-sm fa fa-angle-up" onClick={scrollToTop} />;
};
