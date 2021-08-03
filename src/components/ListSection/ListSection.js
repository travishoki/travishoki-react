import React from 'react';
import PropTypes from 'prop-types';

import { splitListInHalf } from './ListSection.utils';

const ListSection = ({ title, list }) => {
	const [ LIST_A, LIST_B ] = splitListInHalf(list);

	return (
		<section className="primary list-section">
			<h3>{title}</h3>

			<div className="boxed boxed-md">
				<div className="row">
					<div className="col-sm-6">
						<ul>
							{LIST_A.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
					<div className="col-sm-6">
						<ul>
							{LIST_B.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

ListSection.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};

export default ListSection;
