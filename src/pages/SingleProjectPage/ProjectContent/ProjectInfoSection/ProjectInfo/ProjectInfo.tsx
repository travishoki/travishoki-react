import React, { ReactNode } from 'react';

import { AnswerSection } from '../../AnswerSection/AnswerSection';

export const ProjectInfo = ({ answer, label }: ProjectInfoProps) => {
	return (
		<>
			<p className="label">{label}:</p>
			<AnswerSection>{answer}</AnswerSection>
		</>
	);
};

type ProjectInfoProps = {
	answer: ReactNode;
	label: string;
};
