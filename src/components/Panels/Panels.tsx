import React, { ReactNode } from 'react';

import './Panels.scss';
import classNames from 'classnames';

export const Panels = ({ children, className }: PanelsProps) => (
	<div className={classNames('panels', className)}>{children}</div>
);

type PanelsProps = {
	children: ReactNode;
	className?: string;
};
