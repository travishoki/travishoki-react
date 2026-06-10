import React from 'react';

import { BulletedList } from '~components/BulletedList/BulletedList';

import { ResumeDataType } from '../ResumePage.data';
import { SubLine } from './SubLine/SubLine';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
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
	<li className="experience-item staggered-item">
		<div className="image-container">
			<img className="image round experience-image" src={img} />
		</div>

		<div className="info-box">
			<h3 className="m-0">{title}</h3>
			<SubLine dateEnd={dateEnd} dateStart={dateStart} position={position} />

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
