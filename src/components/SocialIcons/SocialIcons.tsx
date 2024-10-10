import React from 'react';

import './SocialIcons.scss';

export const SocialIcons = () => (
	<ul className="social-icons">
		<li>
			<a
				href="https://github.com/travishoki/"
				rel="noreferrer"
				target="_blank"
				title="Travis's Github"
			>
				<i className="circ-sm fa fa-git" />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/travishoki"
				rel="noreferrer"
				target="_blank"
				title="Travis's Linked In"
			>
				<i className="circ-sm fa fa-linkedin" />
			</a>
		</li>
	</ul>
);
