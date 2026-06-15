import React, { useEffect, useState } from 'react';

import { animate } from 'motion/react';

// Tuning value kept named so the no-magic-numbers rule stays happy.
const SECONDS_PER_CHAR = 0.09;

export const Typewriter = ({ className, text }: TypewriterProps) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const controls = animate(0, text.length, {
			duration: text.length * SECONDS_PER_CHAR,
			ease: 'linear',
			onUpdate: (latest) => setCount(Math.round(latest)),
		});

		return () => controls.stop();
	}, [text]);

	return (
		<span className={className}>
			{text.slice(0, count)}
			{/* Reserve the full text's space so surrounding content doesn't shift
			    as letters are revealed. */}
			<span aria-hidden style={{ opacity: 0 }}>
				{text.slice(count)}
			</span>
		</span>
	);
};

type TypewriterProps = {
	className?: string;
	text: string;
};
