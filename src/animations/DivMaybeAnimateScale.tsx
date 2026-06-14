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
