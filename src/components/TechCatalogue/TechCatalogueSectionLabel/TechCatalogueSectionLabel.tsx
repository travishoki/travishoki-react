import React from 'react';

type TechCatalogueSectionLabelProps = {
	label: string;
	onToggle: () => void;
	open: boolean;
};

export const TechCatalogueSectionLabel = ({
	label,
	onToggle,
	open,
}: TechCatalogueSectionLabelProps) => (
	<button className="tech-catalogue-section-label px-3 py-2" onClick={onToggle}>
		{label}
		<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
	</button>
);
