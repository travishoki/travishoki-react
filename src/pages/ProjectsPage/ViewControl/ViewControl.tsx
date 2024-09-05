import React from 'react';

const ViewControl = ({ grid, isVisible, toggleView }: ViewControlProps) => {
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

ViewControl.defaultProps = {
	grid: false,
	isVisible: false,
};

export default ViewControl;
