import React from 'react';

import styles from './ViewControl.module.scss';

export const ViewControl = ({ grid = false, toggleView }: ViewControlProps) => {
	return (
		<p className={styles.viewControls} onClick={toggleView}>
			View: <i className={`fa fa-${grid ? 'th-large' : 'th-list'}`} />
		</p>
	);
};

type ViewControlProps = {
	grid: boolean;
	toggleView: () => void;
};
