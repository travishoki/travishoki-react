import React from 'react';

import TechList from './TechList';
import { ResumeDataType } from './ResumePage.data';
import BulletedList from '~components/bulletedList/BulletedList';

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

			<TechList techs={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;

export default ExperienceItem;
