import React from 'react';

import { Link } from 'react-router-dom';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechKeys, TechStrings } from '~const/Tech.const';

import './TechListVertical.scss';

export const TechListVertical = ({ list }: TechListVerticalProps) => {
	if (list.length === 0) return null;

	return (
		<ul className="tech-list-vertical">
			{list.map((tech, index) => (
				<li key={index} className="tech-icon-item">
					<Link title={tech} to={`/projects/${tech}`}>
						<TechIcon name={tech} />
						<p>{TechStrings[tech]}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

type TechListVerticalProps = {
	list: (keyof TechKeys)[];
};
