import React from 'react';

import { Link } from 'react-router-dom';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechKeys } from '~const/Tech.const';

import './TechList.scss';

export const TechList = ({ list }: TechListProps) => {
	if (list.length === 0) return null;

	return (
		<ul className="tech-icon-list">
			{list.map((tech, index) => (
				<li key={index} className="tech-icon-item">
					<Link title={tech} to={`/projects/${tech}`}>
						<TechIcon name={tech} />
						<p>{tech}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

type TechListProps = {
	list: (keyof TechKeys)[];
};
