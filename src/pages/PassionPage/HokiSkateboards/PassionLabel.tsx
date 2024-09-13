import React, { ReactNode } from 'react';

import './PassionLabel.scss';

export const PassionLabel = ({ children }: PassionLabelProps) => (
	<p className="passion-label">{children}</p>
);

type PassionLabelProps = {
	children: ReactNode;
};
