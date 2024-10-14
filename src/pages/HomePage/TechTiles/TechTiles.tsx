import React from 'react';
import { Link } from 'react-router-dom';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechStrings } from '~const/Tech.const';

import { DISPLAYED_LIST } from '../HomePage.data';
import './TechTiles.scss';

export const TechTiles = () => (
	<section className="white tech-tiles">
		<ul>
			{DISPLAYED_LIST.map((tech, index) => (
				<li key={index}>
					<Link title={TechStrings[tech]} to={`/projects/${tech}`}>
						<TechIcon name={tech} />
					</Link>
				</li>
			))}
		</ul>
	</section>
);
