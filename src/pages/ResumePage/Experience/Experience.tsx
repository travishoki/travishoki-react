import React, { Fragment } from 'react';

import { StaggeredList } from '~components/StaggeredList/StaggeredList';

import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { RESUME_DATA } from '../ResumePage.data';
import { TechDivider } from '../TechDivider/TechDivider';

import styles from './Experience.module.scss';

const DIVIDER_POSITION = 3;

export const Experience = () => (
	<section className="experience">
		<div className="boxed boxed-xl">
			<h2>Experience</h2>
			<StaggeredList className={styles.staggeredList}>
				{RESUME_DATA.map((job, index) => {
					const showTechDivider =
						index === RESUME_DATA.length - DIVIDER_POSITION;

					return (
						<Fragment key={job.title}>
							{showTechDivider && (
								<li className={styles.techDividerContainer}>
									<TechDivider text="Pre Tech Experience" />
								</li>
							)}
							<ExperienceItem {...job} />
						</Fragment>
					);
				})}
			</StaggeredList>
		</div>
	</section>
);
