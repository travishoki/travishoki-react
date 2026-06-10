import React, { ReactNode } from 'react';

import classNames from 'classnames';

import './Panels.scss';

export const Panels = ({ children, className }: PanelsProps) => (
	<div className={classNames('panels', className)}>{children}</div>
);

type PanelsProps = {
	children: ReactNode;
	className?: string;
};
