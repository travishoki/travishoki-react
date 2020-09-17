import React from 'react';

const SocialIcons = () => (
	<ul className="social-icons">
		<li>
			<a
				href="https://github.com/travishoki/"
				target="_blank"
				title="Travis's Github"
			>
				<i className="circ-sm fa fa-git" />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/travishoki"
				target="_blank"
				title="Travis's Linked In"
			>
				<i className="circ-sm fa fa-linkedin" />
			</a>
		</li>
		<li>
			<a
				href="http://codepen.io/travis-hoki/"
				target="_blank"
				title="Travis's Codepen"
			>
				<i className="circ-sm fa fa-codepen" />
			</a>
		</li>
	</ul>
);

export default SocialIcons;
