import React from 'react';
import PropTypes from 'prop-types';

const ViewControl = ({
	grid,
	isVisible,
	toggleView,
}) => {
	if (!isVisible) return null;

	return (
		<p
			className="view-controls"
			onClick={toggleView}
		>
			View: <i className={`fa fa-${(grid) ? 'th-large' : 'th-list'}`} />
		</p>
	);
};

ViewControl.propTypes = {
	grid: PropTypes.bool,
	isVisible: PropTypes.bool,
    toggleView: PropTypes.func,
};

ViewControl.defaultProps = {
	grid: false,
	isVisible: false,
};

export default ViewControl;
