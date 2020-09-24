import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({
	dateEnd,
	dateStart,
	img,
	position,
	tasks,
	title,
}) => (
    <li>
        <div className="image">
            <img src={img}/>
        </div>

        <div className="text">
            <h3>{title}</h3>

            <div className="sub-line">
                <h4>{position}</h4>
                <p className="date">{dateStart} - {dateEnd}</p>
            </div>

			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
            </ul>
        </div>
    </li>
);

ExperienceItem.propTypes = {
	dateEnd: PropTypes.string,
	dateStart: PropTypes.string,
	img: PropTypes.string,
	position: PropTypes.string,
	tasks: PropTypes.array,
	title: PropTypes.string,
};

export default ExperienceItem;
