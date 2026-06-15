import React, { ReactNode } from 'react';

import { HTMLMotionProps, motion } from 'motion/react';

export const DivMaybeAnimateScale = ({
	animate = false,
	children,
	...rest
}: DivMaybeAnimateScaleProps) => {
	if (animate) {
		return (
			<motion.div
				initial={{ scale: 0.5 }}
				// `once` scales the element in the first time it enters view and
				// keeps it there — without it the element reverts to scale 0.5
				// whenever it scrolls out of view, which left logos stuck small
				// after client-side navigation.
				viewport={{ once: true }}
				whileInView={{ scale: 1 }}
				{...(rest as HTMLMotionProps<'div'>)}
			>
				{children}
			</motion.div>
		);
	}

	return <div {...rest}>{children}</div>;
};

type DivMaybeAnimateScaleProps = {
	animate: boolean;
	children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
