import React, { ReactNode, useLayoutEffect, useRef } from 'react';

import { useAnimate } from 'motion/react';

const DURATION = 0.3;

// Smoothly animates its height whenever `trigger` changes — measuring the
// content before and after, animating between the two, then releasing back to
// `auto`. Releasing to auto keeps nested content (e.g. collapsible sections)
// free to grow/shrink on their own between triggers. overflow is only clipped
// during the animation so hover tooltips aren't cut off while idle.
export const MotionAutoHeight = ({
	children,
	trigger,
}: MotionAutoHeightProps) => {
	const [scope, animate] = useAnimate<HTMLDivElement>();
	const previousHeight = useRef<number | null>(null);

	useLayoutEffect(() => {
		const wrapper = scope.current;
		if (!wrapper) return;

		// Measure the true resting height: force `auto` and read it back. The
		// wrapper is a permanent BFC (flow-root below), so child margins are
		// contained the same way in every state — the measured target therefore
		// matches the final `auto` layout and there's no snap when released.
		wrapper.style.height = 'auto';
		wrapper.style.overflow = '';
		const nextHeight = wrapper.offsetHeight;

		const prevHeight = previousHeight.current;
		previousHeight.current = nextHeight;

		if (prevHeight === null || prevHeight === nextHeight) return;

		wrapper.style.height = `${prevHeight}px`;
		wrapper.style.overflow = 'hidden';

		animate(
			wrapper,
			{ height: `${nextHeight}px` },
			{
				duration: DURATION,
				ease: 'easeInOut',
				onComplete: () => {
					wrapper.style.height = 'auto';
					wrapper.style.overflow = '';
				},
			},
		);
	}, [animate, scope, trigger]);

	// flow-root keeps the wrapper a block formatting context at all times so
	// children's vertical margins stay contained whether overflow is visible
	// (at rest) or hidden (mid-animation), keeping measurements consistent.
	return (
		<div ref={scope} style={{ display: 'flow-root' }}>
			{children}
		</div>
	);
};

type MotionAutoHeightProps = {
	children: ReactNode;
	trigger: unknown;
};
