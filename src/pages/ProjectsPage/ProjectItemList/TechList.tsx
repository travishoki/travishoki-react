import React from 'react';

import { Link } from 'react-router-dom';

import TechIcon from '~components/TechIcon/TechIcon';
import { TechKeys } from '~const/Tech.const';

import './TechList.scss';

const TechList = ({ techs }: TechListProps) => {
	return (
		<ul className="tech-icon-list">
			{techs.map((tech, index) => (
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
	techs: (keyof TechKeys)[];
};

export default TechList;
