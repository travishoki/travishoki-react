import React from 'react';

import TechList from './TechList';
import { ResumeDataType } from './ResumePage.data';

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

			<ul className="bulleted">
				{tasks.map((task, index) => (
					<li key={index} className="bulleted-item">
						{task}
					</li>
				))}
			</ul>

			{details && <p className="details">{details}</p>}

			<TechList techs={techs} />
		</div>
	</li>
);

type ExperienceItemPropTypes = ResumeDataType;

export default ExperienceItem;
