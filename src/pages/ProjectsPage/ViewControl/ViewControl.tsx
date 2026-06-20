import React from 'react';

import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ViewControl.module.scss';

export const ViewControl = ({ grid = false, toggleView }: ViewControlProps) => {
	return (
		<p className={styles.viewControls} onClick={toggleView}>
			View: <FontAwesomeIcon icon={grid ? faThLarge : faThList} />
		</p>
	);
};

type ViewControlProps = {
	grid: boolean;
	toggleView: () => void;
};
