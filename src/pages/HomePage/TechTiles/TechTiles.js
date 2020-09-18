import React from 'react';
import { Link } from "react-router-dom";

import { filterList } from '../../ProjectsPage/ProjectsPage.data';
import TechIcon from '../../../components/TechIcon/TechIcon';

const TechTiles = () => (
	<section className="white tech-tiles">
		<ul>
			{filterList.map((tech, index) => (
				<li
					key={index}
				>
					<Link
						title={tech}
						to={`/projects/${tech}`}
					>
						<TechIcon
							name={tech}
						/>
					</Link>
				</li>
			))}
		</ul>
	</section>
);

export default TechTiles;
