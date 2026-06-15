import React, { useEffect, useState } from 'react';

import { animate } from 'motion/react';

// Tuning value kept named so the no-magic-numbers rule stays happy.
const SECONDS_PER_CHAR = 0.09;

export const Typewriter = ({ className, text }: TypewriterProps) => {
	const [displayed, setDisplayed] = useState('');

	useEffect(() => {
		const controls = animate(0, text.length, {
			duration: text.length * SECONDS_PER_CHAR,
			ease: 'linear',
			onUpdate: (latest) => setDisplayed(text.slice(0, Math.round(latest))),
		});

		return () => controls.stop();
	}, [text]);

	return <span className={className}>{displayed}</span>;
};

type TypewriterProps = {
	className?: string;
	text: string;
};
