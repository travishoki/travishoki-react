import React, { PropTypes } from 'react';

const FilterItem = ({ item, filter, onSelectFilter }) => {
    const clickItem = () => {
        onSelectFilter(item);
    };
    const active = (filter == item) ? 'active' : '';
    return (
        <li
            onClick={clickItem}
            className={`${item} ${active}`}
        ></li>
    );
};

FilterItem.propTypes = {
    item: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
};

export default FilterItem;
