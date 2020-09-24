import React from 'react';
import PropTypes from 'prop-types';

const ListSection = ({ title, list }) => {
	const MID_NUM = Math.ceil(list.length / 2);
	const LIST_A = list.slice(0, MID_NUM);
	const LIST_B = list.splice(MID_NUM, list.length);

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
