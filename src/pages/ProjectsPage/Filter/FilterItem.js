import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TechIcon from '../../../components/TechIcon/TechIcon';

const FilterItem = ({
	item,
	filter,
	onSelectFilter
}) => (
    <li
        onClick={() => onSelectFilter(item)}
        className={classnames(
			'filter-item tech-icon-item',
			{
				active: (filter === null || filter === item),
			}
		)}
    >
        <TechIcon name={item} />
        <p>{item}</p>
    </li>
);

FilterItem.propTypes = {
    item: PropTypes.string.isRequired,
    filter: PropTypes.string,
    onSelectFilter: PropTypes.func.isRequired,
};

export default FilterItem;
