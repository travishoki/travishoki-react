import React from 'react';
import { Link } from 'react-router-dom';

import TechIcon from '~components/TechIcon/TechIcon';

import { FILTER_LIST } from '../../ProjectsPage/ProjectsPage.data';
import './TechTiles.scss';

const TechTiles = () => (
	<section className="white tech-tiles">
		<ul>
			{FILTER_LIST.map((tech, index) => (
				<li key={index}>
					<Link title={tech} to={`/projects/${tech}`}>
						<TechIcon name={tech} />
					</Link>
				</li>
			))}
		</ul>
	</section>
);

export default TechTiles;
