import React from 'react';

import { BulletedList } from '~components/bulletedList/BulletedList';

import { ResumeDataType } from './ResumePage.data';
import './ExperienceItem.scss';
import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

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

			<TechListSwitcher list={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;
