import React from 'react';

import { BulletedList } from '~components/BulletedList/BulletedList';

import { ResumeDataType } from '../ResumePage.data';
import './ExperienceItem.scss';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

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
	<li className="experience-item staggered-item">
		<div className="image-container">
			<img className="image round experience-image" src={img} />
		</div>

		<div className="info-box">
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

			<TechListCatalogue list={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;
