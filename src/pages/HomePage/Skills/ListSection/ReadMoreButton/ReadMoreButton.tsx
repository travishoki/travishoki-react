import React from 'react';

type ReadMoreButtonProps = {
	expanded: boolean;
	onToggle: () => void;
};

export const ReadMoreButton = ({ expanded, onToggle }: ReadMoreButtonProps) => (
	<button className="list-section-read-more" onClick={onToggle}>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
		{expanded ? 'Read Less' : 'Read More'}
	</button>
);
