import React from 'react';
import PropTypes from 'prop-types';

const TechIcon = ({ name }) => {
    return (
        <div className="tech-icon-holder">
            <div className={`tech-icon tech-${name}`} />
        </div>
    );
};

TechIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TechIcon;
