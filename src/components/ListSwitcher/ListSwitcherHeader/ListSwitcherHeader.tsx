import React from 'react';

type ListSwitcherHeaderProps = {
	header: string;
};

export const ListSwitcherHeader = ({ header }: ListSwitcherHeaderProps) => (
	<div className="list-switcher-header py-1 px-2">
		<p>{header}</p>
	</div>
);
