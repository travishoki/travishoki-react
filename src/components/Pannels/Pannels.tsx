import React, { ReactNode } from 'react';

import './Pannels.scss';
import classNames from 'classnames';

const Pannels = ({ children, className }: PannelsProps) => (
	<div className={classNames('pannels', className)}>{children}</div>
);

type PannelsProps = {
	children: ReactNode;
	className?: string;
};

export default Pannels;
