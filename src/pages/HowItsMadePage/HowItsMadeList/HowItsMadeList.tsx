import React from 'react';

import ImgAxeDevToolsReport from '~images/how-its-made/axe-dev-tools-report.jpg';
import ImgPingdomSpeedTestReport from '~images/how-its-made/pingdom-speed-test.jpg';

import * as Link from './HowItsMade.links.data';
import { ViewScreenShot } from './ViewScreenShot/ViewScreenShot';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	return (
		<section className={styles.howItsMadeList}>
			<div className="boxed">
				<h3>List of the Tech Used</h3>
				<ul>
					<li>
						Built with <Link.ReactJS />
					</li>
					<li>
						<Link.Typescript /> typed Javascript
					</li>
					<li>
						Unit tested with <Link.Jest />
					</li>
					<li>
						<Link.Eslint /> for consistent coding style
					</li>
					<li>
						<Link.Storybook /> for component management
					</li>
					<li>
						<Link.Husky /> for Git lifecycle automated scripts
					</li>
					<li>
						Built with some assistance from <Link.ClaudeCode />
					</li>
					<li>
						<Link.Scss /> preprocessed styling with <Link.CssModules />
					</li>
					<li>
						Animated with <Link.Motion />
					</li>
					<li>
						ADA accessibility optimized using <Link.AxeDevTools />
						<ViewScreenShot
							alt="Axe DevTools Report"
							/* eslint-disable-next-line no-magic-numbers */
							dimensions={[1743, 1694]}
							src={ImgAxeDevToolsReport}
						/>
					</li>
					<li>
						<Link.Pingdom /> website speed test optimized (A 97)
						<ViewScreenShot
							alt="Pingdom Website Speed Test Report"
							/* eslint-disable-next-line no-magic-numbers */
							dimensions={[2048, 1220]}
							src={ImgPingdomSpeedTestReport}
						/>
					</li>
					<li>
						Website hosted with <Link.Bluehost />
					</li>
				</ul>
			</div>
		</section>
	);
};
