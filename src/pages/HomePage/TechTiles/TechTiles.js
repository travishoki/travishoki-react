import React from 'react';
import { Link } from "react-router-dom";

import { filterList } from '../../ProjectsPage/ProjectsPage.data';
import TechIcon from '../../../components/TechIcon/TechIcon';

const TechTiles = () => (
	<section className="white tech-tiles">
		<ul>
			{filterList.map((item, index) => (
				<li
					key={index}
				>
					<Link to={`/projects/${item}`}>
						<TechIcon
							name={item}
						/>
					</Link>
				</li>
			))}
		</ul>
	</section>
);

export default TechTiles;
