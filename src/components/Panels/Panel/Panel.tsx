import React, { ReactNode } from 'react';

export const Panel = ({ children }: PanelProps) => <div>{children}</div>;

type PanelProps = {
	children: ReactNode;
};
