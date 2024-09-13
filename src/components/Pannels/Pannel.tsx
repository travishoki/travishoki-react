import React, { ReactNode } from 'react';

export const Pannel = ({ children }: PannelProps) => (
	<div className="pannel">{children}</div>
);

type PannelProps = {
	children: ReactNode;
};
