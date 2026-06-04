import React from 'react';

type TechCatalogueSectionLabelProps = {
	label: string;
};

export const TechCatalogueSectionLabel = ({
	label,
}: TechCatalogueSectionLabelProps) => (
	<p className="tech-catalogue-section-label my-2 py-1 px-2">{label}</p>
);
