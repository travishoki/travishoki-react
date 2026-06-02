import React from 'react';

type ListSwitcherButtonProps = {
	expanded: boolean;
	onClick: () => void;
};

export const ListSwitcherButton = ({
	expanded,
	onClick,
}: ListSwitcherButtonProps) => (
	<button className="btn btn-primary list-switcher-button" onClick={onClick}>
		<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
	</button>
);
