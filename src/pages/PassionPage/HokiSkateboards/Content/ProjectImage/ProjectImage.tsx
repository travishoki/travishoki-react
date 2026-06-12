import React from 'react';

import classNames from 'classnames';

import style from './ProjectImage.module.scss';

export const ProjectImage = ({ alt, src }: ProjectImageProps) => {
	return (
		<img
			alt={alt}
			className={classNames('center', style['project-image'])}
			src={src}
		/>
	);
};

type ProjectImageProps = {
	alt: string;
	src: string;
};
