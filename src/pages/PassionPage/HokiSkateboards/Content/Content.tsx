import React from 'react';

import classNames from 'classnames';

import { ChildrensBookColumn } from './ChildrensBookColumn/ChildrensBookColumn';
import { RetailWebsiteColumn } from './RetailWebsiteColumn/RetailWebsiteColumn';

import styles from './Content.module.scss';

export const Content = () => (
	<div className={`${styles.hokiSkateboardsInnerContent} mb-3`}>
		<div className="row">
			<div className={classNames('col-sm-6 pt-3', styles.column)}>
				<RetailWebsiteColumn />
			</div>
			<div className={classNames('col-sm-6 pt-3', styles.column)}>
				<ChildrensBookColumn />
			</div>
		</div>
	</div>
);
