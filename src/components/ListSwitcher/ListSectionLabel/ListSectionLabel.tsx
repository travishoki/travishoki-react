import React from 'react';

type ListSectionLabelProps = {
	label: string;
};

export const ListSectionLabel = ({ label }: ListSectionLabelProps) => (
	<p className="list-switcher-legacy-label my-2 py-1 px-2">{label}</p>
);
