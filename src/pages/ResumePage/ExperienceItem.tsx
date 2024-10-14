import React from 'react';

import { BulletedList } from '~components/bulletedList/BulletedList';
import { TechListHorizontal } from '~components/TechListHorizontal/TechListHorizontal';

import { ResumeDataType } from './ResumePage.data';
import './ExperienceItem.scss';

export const ExperienceItem = ({
	affiliatedCompany,
	dateEnd,
	dateStart,
	img,
	position,
	tasks,
	techs,
	title,
}: ExperienceItemPropTypes) => (
	<li className="staggered-item">
		<img className="image round experience-image" src={img} />

		<div className="text">
			<h3>{title}</h3>
			<div className="sub-line">
				<h4>{position}</h4>
				<p className="date">
					{dateStart} - {dateEnd}
				</p>
			</div>

			<BulletedList list={tasks} />

			{affiliatedCompany && (
				<div className="affiliated-company">
					<img className="round" src={affiliatedCompany.img} />
					<p>{affiliatedCompany.title}</p>
				</div>
			)}

			{techs.length > 0 && <TechListHorizontal list={techs} />}
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;
