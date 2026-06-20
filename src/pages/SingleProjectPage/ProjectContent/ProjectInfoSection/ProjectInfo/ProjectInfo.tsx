import React, { ReactNode } from 'react';

import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';

export const ProjectInfo = ({ label, text }: ProjectInfoProps) => (
	<ParagraphBlock collapsible label={label} text={text} />
);

type ProjectInfoProps = {
	label: string | ReactNode;
	text: string | string[];
};
