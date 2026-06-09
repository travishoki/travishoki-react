import React from 'react';
import classNames from 'classnames';

import './ReadMoreButton.scss';

type ReadMoreButtonProps = {
	className?: string;
	expanded: boolean;
	onToggle: () => void;
};

export const ReadMoreButton = ({
	className,
	expanded,
	onToggle,
}: ReadMoreButtonProps) => (
	<button
		className={classNames('read-more-button', className)}
		onClick={onToggle}
	>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
		{expanded ? 'Read Less' : 'Read More'}
	</button>
);
