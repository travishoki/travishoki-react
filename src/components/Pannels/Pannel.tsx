import React, { ReactNode } from 'react';

const Pannel = ({ children }: PannelProps) => (
	<div className="pannel">{children}</div>
);

type PannelProps = {
	children: ReactNode;
};

export default Pannel;
