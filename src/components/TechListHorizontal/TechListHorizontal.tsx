import React from 'react';

import { Link } from 'react-router-dom';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechKeys } from '~const/Tech.const';
import './TechListHorizontal.scss';

export const TechListHorizontal = ({ list }: TechListProps) => {
	if (list.length === 0) return null;

	return (
		<ul className="tech-icon-list-horizontal">
			{list.map((tech, index) => (
				<li key={index} className="tech-icon-item">
					<Link title={tech} to={`/projects/${tech}`}>
						<TechIcon name={tech} />
					</Link>
				</li>
			))}
		</ul>
	);
};

type TechListProps = {
	list: (keyof TechKeys)[];
};
