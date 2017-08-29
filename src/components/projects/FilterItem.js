import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ item, filter, onSelectFilter }) => {
    const clickItem = () => {
        onSelectFilter(item);
    };
    const active = (filter === null || filter === item) ? 'active' : '';
    return (
        <li
            onClick={clickItem}
            className={`filter-item tech-icon-item ${active}`}
        >
            <div className={`tech-icon tech-${item}`} />
            <p>{item}</p>
        </li>
    );
};

FilterItem.propTypes = {
    item: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
};

export default FilterItem;
