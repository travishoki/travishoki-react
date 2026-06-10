import React from 'react';

import { BulletedList } from '~components/BulletedList/BulletedList';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { ResumeDataType } from '../ResumePage.data';
import { AffiliatedCompany } from './AffiliatedCompany/AffiliatedCompany';
import { SubLine } from './SubLine/SubLine';

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
			<AffiliatedCompany affiliatedCompany={affiliatedCompany} />
			<TechListCatalogue list={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;
