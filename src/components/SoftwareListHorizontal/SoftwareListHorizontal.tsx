import React from 'react';

import { Link } from 'react-router-dom';

import { SoftwareIcon } from '~components/SoftwareListHorizontal/SoftwareIcon';
import { SoftwareKeys } from '~const/Software.const';
import './SoftwareListHorizontal.scss';

export const SoftwareListHorizontal = ({ list }: TechListProps) => {
	return (
		<ul className="software-list">
			{list.map((tech, index) => (
				<li key={index}>
					<Link title={tech} to={`/projects/${tech}`}>
						<SoftwareIcon name={tech} />
					</Link>
				</li>
			))}
		</ul>
	);
};

type TechListProps = {
	list: (keyof SoftwareKeys)[];
};
