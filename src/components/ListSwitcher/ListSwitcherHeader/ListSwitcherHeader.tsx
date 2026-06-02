import React from 'react';

type ListSwitcherHeaderProps = {
	header: string;
};

export const ListSwitcherHeader = ({ header }: ListSwitcherHeaderProps) => (
	<div className="list-switcher-header">
		<p>{header}</p>
	</div>
);
