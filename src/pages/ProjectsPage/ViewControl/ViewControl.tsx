import React from 'react';

export const ViewControl = ({
	grid = false,
	isVisible = false,
	toggleView,
}: ViewControlProps) => {
	if (!isVisible) return null;

	return (
		<p className="view-controls" onClick={toggleView}>
			View: <i className={`fa fa-${grid ? 'th-large' : 'th-list'}`} />
		</p>
	);
};

type ViewControlProps = {
	grid: boolean;
	isVisible: boolean;
	toggleView: () => void;
};
