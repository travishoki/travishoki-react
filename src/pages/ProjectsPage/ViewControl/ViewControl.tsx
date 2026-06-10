import React from 'react';

export const ViewControl = ({ grid = false, toggleView }: ViewControlProps) => {
	return (
		<p className="view-controls" onClick={toggleView}>
			View: <i className={`fa fa-${grid ? 'th-large' : 'th-list'}`} />
		</p>
	);
};

type ViewControlProps = {
	grid: boolean;
	toggleView: () => void;
};
