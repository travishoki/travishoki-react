import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { SoftwareIcon } from '~components/SoftwareListHorizontal/SoftwareIcon';
import { SOFTWARE_STRINGS, SoftwareKeys } from '~const/Software.const';
import './SoftwareListHorizontal.scss';

export const SoftwareListHorizontal = ({
	header = 'Software',
	list,
}: SoftwareListProps) => {
	const [expanded, setExpanded] = useState(false);

	if (list.length === 0) return null;

	return (
		<div className="software-list-switcher">
			<div className="software-list-switcher-header">
				<p>{header}</p>
			</div>
			<div className="software-list-switcher-content">
				<ul className={expanded ? 'software-list-vertical' : 'software-list'}>
					{list.map((software, index) => (
						<li key={index}>
							<Link
								title={SOFTWARE_STRINGS[software]}
								to={`/projects/${software}`}
							>
								<SoftwareIcon name={software} />
								{expanded && <p>{SOFTWARE_STRINGS[software]}</p>}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<button
				className="btn btn-primary software-list-switcher-button"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? (
					<i className="fa fa-chevron-up" />
				) : (
					<i className="fa fa-chevron-down" />
				)}
			</button>
		</div>
	);
};

type SoftwareListProps = {
	header?: string;
	list: (keyof SoftwareKeys)[];
};
