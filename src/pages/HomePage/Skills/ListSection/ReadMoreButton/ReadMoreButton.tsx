import React from 'react';

import './ReadMoreButton.scss';

type ReadMoreButtonProps = {
	expanded: boolean;
	onToggle: () => void;
};

export const ReadMoreButton = ({ expanded, onToggle }: ReadMoreButtonProps) => (
	<button className="read-more-button" onClick={onToggle}>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
		{expanded ? 'Read Less' : 'Read More'}
	</button>
);
