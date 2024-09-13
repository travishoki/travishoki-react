import React, { ReactNode } from 'react';

import './PassionLabel.scss';

const PassionLabel = ({ children }: PassionLabelProps) => (
	<p className="passion-label">{children}</p>
);

type PassionLabelProps = {
	children: ReactNode;
};

export default PassionLabel;
