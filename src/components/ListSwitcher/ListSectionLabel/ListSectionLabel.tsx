import React from 'react';

type ListSectionLabelProps = {
	label: string;
};

export const ListSectionLabel = ({ label }: ListSectionLabelProps) => (
	<p className="list-switcher-legacy-label">{label}</p>
);
