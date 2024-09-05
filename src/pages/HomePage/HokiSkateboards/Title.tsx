import React from 'react';

const Title = ({ title }: TitleProps) => <h4>{title}</h4>;

type TitleProps = {
	title: string;
};

export default Title;
