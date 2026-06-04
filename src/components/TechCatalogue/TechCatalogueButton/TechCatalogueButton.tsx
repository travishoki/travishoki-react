import React from 'react';

type TechCatalogueButtonProps = {
	expanded: boolean;
	onClick: () => void;
};

export const TechCatalogueButton = ({
	expanded,
	onClick,
}: TechCatalogueButtonProps) => (
	<button className="btn btn-primary tech-catalogue-button" onClick={onClick}>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
	</button>
);
