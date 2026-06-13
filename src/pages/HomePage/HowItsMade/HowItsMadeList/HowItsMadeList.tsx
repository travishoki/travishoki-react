import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~helpers/useIsMobile';
import ImgAxeDevToolsReport from '~images/how-its-made/axe-dev-tools-report.jpg';
import ImgPingdomSpeedTestReport from '~images/how-its-made/pingdom-speed-test.jpg';

import { ItemLink } from './ItemLink/ItemLink';
import { ViewScreenShot } from './ViewScreenShot/ViewScreenShot';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	const isMobile = useIsMobile();
	const [expanded, setExpanded] = useState(false);

	const showAll = !isMobile || expanded;

	return (
		<>
			<ul className={styles.howItsMadeList}>
				<li>
					Built with{' '}
					<ItemLink href="https://react.dev" title="ReactJS Documentation">
						ReactJS
					</ItemLink>
				</li>
				<li>
					<ItemLink
						href="https://www.typescriptlang.org"
						title="Typescript NPM Module"
					>
						Typescript
					</ItemLink>{' '}
					typed Javascript
				</li>
				<li>
					Unit tested with{' '}
					<ItemLink href="https://jestjs.io/docs/getting-started" title="Jest">
						Jest
					</ItemLink>
				</li>

				{showAll && (
					<>
						<li>
							<ItemLink href="https://eslint.org" title="Eslint">
								Eslint
							</ItemLink>{' '}
							for consistent coding style
						</li>

						<li>
							<ItemLink href="https://storybook.js.org" title="Storybook">
								Storybook
							</ItemLink>{' '}
							for component management
						</li>
						<li>
							<ItemLink href="https://typicode.github.io/husky" title="Husky">
								Husky
							</ItemLink>{' '}
							for Git lifecycle automated scripts
						</li>
						<li>
							Build with some assistance from{' '}
							<ItemLink href="https://claude.com" title="Claude Code">
								Claude Code
							</ItemLink>
						</li>
						<li>
							<ItemLink
								href="https://sass-lang.com"
								title="Sass Land Documentation"
							>
								SCSS
							</ItemLink>{' '}
							preprocessed styling with
							<ItemLink
								href="https://github.com/css-modules/css-modules"
								title="CSS Modules Documentation"
							>
								CSS Modules
							</ItemLink>
						</li>
						<li>
							ADA accessibility optimized using{' '}
							<ItemLink
								href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
								title="axe DevTools Google Chrome Plugin"
							>
								axe DevTools
							</ItemLink>
							<ViewScreenShot
								alt="Axe DevTools Report"
								/* eslint-disable-next-line no-magic-numbers */
								dimensions={[1743, 1694]}
								src={ImgAxeDevToolsReport}
							/>
						</li>
						<li>
							<ItemLink
								href="https://tools.pingdom.com"
								title="Pingdom Website Speed Test"
							>
								Pingdom
							</ItemLink>{' '}
							website speed test optimized (A 97)
							<ViewScreenShot
								alt="Pingdom Website Speed Test Report"
								/* eslint-disable-next-line no-magic-numbers */
								dimensions={[2048, 1220]}
								src={ImgPingdomSpeedTestReport}
							/>
						</li>
					</>
				)}
			</ul>

			{isMobile && (
				<ReadMoreButton
					expanded={expanded}
					onToggle={() => setExpanded(!expanded)}
				/>
			)}
		</>
	);
};
