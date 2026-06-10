import React, { ReactNode } from 'react';

export const Panel = ({ children }: PanelProps) => (
	<div className="panel">{children}</div>
);

type PanelProps = {
	children: ReactNode;
};
