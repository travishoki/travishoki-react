import React from 'react';

import './TechCatalogueHeader.scss';

type TechCatalogueHeaderProps = {
	label: string;
	onToggle: () => void;
	open: boolean;
};

export const TechCatalogueHeader = ({
	label,
	onToggle,
	open,
}: TechCatalogueHeaderProps) => (
	<button className="tech-catalogue-header px-3 py-2" onClick={onToggle}>
		{label}
		<i className={`fa fa-${open ? 'minus' : 'plus'}`} />
	</button>
);
