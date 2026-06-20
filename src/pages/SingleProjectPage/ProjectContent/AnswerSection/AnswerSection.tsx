import React, { ReactNode } from 'react';

export const AnswerSection = ({ children }: AnswerSectionProps) => {
	return <div className="mb-3">{children}</div>;
};

type AnswerSectionProps = {
	children: ReactNode;
};
