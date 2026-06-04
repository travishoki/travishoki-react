import React from 'react';

type TechCatalogueHeaderProps = {
	header: string;
};

export const TechCatalogueHeader = ({ header }: TechCatalogueHeaderProps) => (
	<div className="tech-catalogue-header py-1 px-2">
		<p>{header}</p>
	</div>
);
