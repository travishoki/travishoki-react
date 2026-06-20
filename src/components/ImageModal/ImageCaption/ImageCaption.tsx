import React, { useState } from 'react';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children, size = 'sm' }: ImageCaptionProps) => {
	const [visible, setVisible] = useState(true);

	const toggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		setVisible((v) => !v);
	};

	if (!visible) {
		return (
			<button className={styles.iconButtonBottom} onClick={toggle}>
				<i className="fa fa-info" />
			</button>
		);
	}

	return (
		<div className={styles[size]}>
			{children}
			<button className={styles.iconButton} onClick={toggle}>
				<i className="fa fa-times" />
			</button>
		</div>
	);
};

type ImageCaptionProps = {
	children: React.ReactNode;
	size?: 'sm' | 'lg';
};
