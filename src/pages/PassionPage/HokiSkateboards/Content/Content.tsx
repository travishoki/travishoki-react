import React from 'react';

import { ChildrensBookColumn } from './ChildrensBookColumn/ChildrensBookColumn';
import { RetailWebsiteColumn } from './RetailWebsiteColumn/RetailWebsiteColumn';
import './Content.scss';

export const Content = () => (
	<div className="hoki-skateboards-inner-content mb-3">
		<div className="row">
			<RetailWebsiteColumn />
			<ChildrensBookColumn />
		</div>
	</div>
);
