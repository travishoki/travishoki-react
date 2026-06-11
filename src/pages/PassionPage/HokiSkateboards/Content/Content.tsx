import React from 'react';

import { ChildrensBookColumn } from './ChildrensBookColumn/ChildrensBookColumn';
import { RetailWebsiteColumn } from './RetailWebsiteColumn/RetailWebsiteColumn';

import styles from './Content.module.scss';

export const Content = () => (
	<div className={`${styles.hokiSkateboardsInnerContent} mb-3`}>
		<div className="row">
			<RetailWebsiteColumn />
			<ChildrensBookColumn />
		</div>
	</div>
);
