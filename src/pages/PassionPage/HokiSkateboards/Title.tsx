import React from 'react';

import './Title.scss';

export const Title = ({ title }: TitleProps) => <h2>{title}</h2>;

type TitleProps = {
	title: string;
};
