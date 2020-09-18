import React from 'react';
import PropTypes from 'prop-types';

import TechIcon from '../TechIcon/TechIcon';

const FilterItem = ({
	item,
	filter,
	onSelectFilter
}) => {
    const clickItem = () => {
        onSelectFilter(item);
    };

    const active = (filter === null || filter === item) ? 'active' : '';

    return (
        <li
            onClick={clickItem}
            className={`filter-item tech-icon-item ${active}`}
        >
            <TechIcon name={item} />
            <p>{item}</p>
        </li>
    );
};

FilterItem.propTypes = {
    item: PropTypes.string.isRequired,
    filter: PropTypes.string,
    onSelectFilter: PropTypes.func.isRequired
};

export default FilterItem;
