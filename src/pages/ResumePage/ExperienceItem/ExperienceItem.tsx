import React from 'react';

import { BulletedList } from '~components/BulletedList/BulletedList';
import { StaggeredItem } from '~components/StaggeredList/StaggeredItem/StaggeredItem';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { ResumeDataType } from '../ResumePage.data';
import { AffiliatedCompany } from './AffiliatedCompany/AffiliatedCompany';
import { SubLine } from './SubLine/SubLine';

import styles from './ExperienceItem.module.scss';

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
	<StaggeredItem className={styles.experienceItem}>
		<div className="image-container">
			<img className={`image round ${styles.experienceImage}`} src={img} />
		</div>

		<div className="info-box">
			<h3 className="m-0">{title}</h3>
			<SubLine dateEnd={dateEnd} dateStart={dateStart} position={position} />
			<BulletedList list={tasks} />
			<AffiliatedCompany affiliatedCompany={affiliatedCompany} />
			<TechListCatalogue list={techs} />
		</div>
	</StaggeredItem>
);

type ExperienceItemPropTypes = ResumeDataType;
