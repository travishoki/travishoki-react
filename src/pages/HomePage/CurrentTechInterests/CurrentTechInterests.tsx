import React from 'react';

import imgClaudeCode from '~images/interests/claude-code.png';

import './CurrentTechInterests.scss';

export const CurrentTechInterests = () => (
	<section className="blue center current-tech-interests-component">
		<h3>Current Tech Interests</h3>

		<div className="interest-item">
			<img
				alt="Claude Code"
				className="center interest-image"
				src={imgClaudeCode}
			/>
			<h4>AI-Assisted Development with Claude</h4>
			<p>
				Claude is a vital part of my development workflow. It accelerates
				boilerplate, assists with debugging, and helps explore architectural
				decisions. Through this, I’m learning to collaborate effectively with AI
				tooling, including Claude Code.
			</p>
		</div>
	</section>
);
