import React, { Fragment } from 'react';

import { ExperienceItem } from './ExperienceItem';
import { RESUME_DATA } from './ResumePage.data';
import { TechDivider } from './TechDivider';

export const Experience = () => (
	<section className="experience">
		<div className="boxed boxed-lg">
			<h2>Experience</h2>

			<ul className="staggered">
				{RESUME_DATA.map((job, index) => {
					const showTechDivider = index === RESUME_DATA.length - 3;

					return (
						<Fragment key={index}>
							{showTechDivider && <TechDivider />}
							<ExperienceItem {...job} />
						</Fragment>
					);
				})}
			</ul>
		</div>
	</section>
);
