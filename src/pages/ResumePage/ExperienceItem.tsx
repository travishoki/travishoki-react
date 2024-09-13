import React from 'react';

import BulletedList from '~components/bulletedList/BulletedList';
import TechListHorizontal from '~components/TechListHorizontal/TechListHorizontal';

import { ResumeDataType } from './ResumePage.data';

const ExperienceItem = ({
	dateEnd,
	dateStart,
	details,
	img,
	position,
	tasks,
	techs,
	title,
}: ExperienceItemPropTypes) => (
	<li className="staggered-item">
		<div className="image">
			<img src={img} />
		</div>

		<div className="text">
			<h3>{title}</h3>
			<div className="sub-line">
				<h4>{position}</h4>
				<p className="date">
					{dateStart} - {dateEnd}
				</p>
			</div>

			<BulletedList list={tasks} />

			{details && <p className="details">{details}</p>}

			<TechListHorizontal list={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;

export default ExperienceItem;
