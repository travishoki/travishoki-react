import React from 'react';

import { TechKeys } from '~const/Tech.const';

import TechList from './TechList';

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

type ExperienceItemPropTypes = {
	dateEnd: string;
	dateStart: string;
	details?: string;
	img: string;
	position: string;
	tasks: string[];
	techs: (keyof TechKeys)[];
	title: string;
};

export default ExperienceItem;
