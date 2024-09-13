import React from 'react';

import './Title.scss';

export const Title = ({ title }: TitleProps) => <h4>{title}</h4>;

type TitleProps = {
	title: string;
};
