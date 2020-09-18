import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CurrentFilter from './CurrentFilter';
import FilterClean from './FilterClean';
import FilterItems from './FilterItems';
import FilterForm from './FilterForm';

const Filter = ({
	filter,
	filterTerm,
	isFilterOpen,
	onChangeFilter,
	onClearAndCloseFilter,
	onSelectFilter,
	toggleOpenFilter,
}) => (
	<Fragment>
		<CurrentFilter
			filter={filter}
			onClearAndCloseFilter={onClearAndCloseFilter}
		/>

		{!filter && (
			<Fragment>
				{isFilterOpen ? (
					<Fragment>
						<FilterForm
							filterTerm={filterTerm}
							onChangeFilter={onChangeFilter}
						/>
						<FilterItems
							filter={filter}
							filterTerm={filterTerm}
							onClearAndCloseFilter={onClearAndCloseFilter}
							onSelectFilter={onSelectFilter}
						/>
					</Fragment>
				) : (
					<FilterClean
						toggleOpenFilter={toggleOpenFilter}
					/>
				)}
			</Fragment>
		)}
	</Fragment>
);

Filter.propTypes = {
	filter: PropTypes.string,
	filterTerm: PropTypes.string,
	isFilterOpen: PropTypes.bool,
	onChangeFilter: PropTypes.func,
	onClearAndCloseFilter: PropTypes.func,
	onSelectFilter: PropTypes.func,
	toggleOpenFilter: PropTypes.func,
};

Filter.defaultProps = {
	isFilterOpen: false,
};

export default Filter;
