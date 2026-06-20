import React from 'react';

import { ParagraphLabel } from '~components/ParagraphLabel/ParagraphLabel';
import { ParagraphList } from '~components/ParagraphList/ParagraphList';
import { makeArray } from '~helpers/arrays';

export const ParagraphBlock = ({ label, text }: ParagraphBlockProps) => (
	<div className="mb-3">
		<ParagraphLabel>{label}:</ParagraphLabel>
		<ParagraphList paragraphs={makeArray(text)} />
	</div>
);

type ParagraphBlockProps = {
	label: string;
	text: string | string[];
};
