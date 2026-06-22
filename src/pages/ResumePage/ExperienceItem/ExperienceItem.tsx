import React from 'react';

import classNames from 'classnames';

import { DivMaybeAnimateScale } from '~animations/DivMaybeAnimateScale';
import { BulletedList } from '~components/BulletedList/BulletedList';
import { ImageContainer } from '~components/StaggeredList/StaggeredItem/ImageContainer/ImageContainer';
import { InfoBox } from '~components/StaggeredList/StaggeredItem/InfoBox/InfoBox';
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
	description,
	img,
	position,
	tasks,
	techs,
	title,
}: ExperienceItemProps) => (
	<StaggeredItem className={styles.experienceItem}>
		<ImageContainer className={styles.imageContainer}>
			<DivMaybeAnimateScale animate>
				<img
					alt={`${title} Logo`}
					className={classNames(
						styles.staggeredItemImage,
						'round',
						styles.experienceImage,
					)}
					src={img}
				/>
			</DivMaybeAnimateScale>
		</ImageContainer>

		<InfoBox>
			<h3 className="m-0">{title}</h3>
			<SubLine dateEnd={dateEnd} dateStart={dateStart} position={position} />
			<AffiliatedCompany affiliatedCompany={affiliatedCompany} />
			<BulletedList list={tasks} />
			{description && <p className="indent">{description}</p>}
			<TechListCatalogue list={techs} />
		</InfoBox>
	</StaggeredItem>
);

type ExperienceItemProps = ResumeDataType;
