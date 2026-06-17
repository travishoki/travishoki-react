import React from 'react';

import { HTMLMotionProps, motion } from 'motion/react';

// Reusable <img> that fades and scales in the first time it scrolls into view.
// Accepts all the usual img props (src, alt, className, ...) plus any motion
// props, which override the defaults below if provided.
export const ImagePopIn = (props: ImagePopInProps) => {
	return (
		<motion.img
			initial={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.4, ease: 'easeInOut' }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1, scale: 1 }}
			{...props}
		/>
	);
};

type ImagePopInProps = HTMLMotionProps<'img'>;
