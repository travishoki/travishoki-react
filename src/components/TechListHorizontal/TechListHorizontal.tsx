import React from 'react';

import { Link } from 'react-router-dom';

import TechIcon from '~components/TechIcon/TechIcon';
import { TechKeys } from '~const/Tech.const';
import './TechListHorizontal.scss';

const TechListHorizontal = ({ techs }: TechListProps) => {
	return (
		<ul className="tech-icon-list-horizontal">
			{techs.map((tech, index) => (
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
	techs: (keyof TechKeys)[];
};

export default TechListHorizontal;
