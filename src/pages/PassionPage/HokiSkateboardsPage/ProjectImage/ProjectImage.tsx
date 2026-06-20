import React from 'react';

import style from './ProjectImage.module.scss';

export const ProjectImage = ({ alt, src }: ProjectImageProps) => {
	return <img alt={alt} className={style.projectImage} src={src} />;
};

type ProjectImageProps = {
	alt: string;
	src: string;
};
