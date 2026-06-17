import React, { useState } from 'react';

import { AnimatePresence } from 'motion/react';

import { MotionListItem } from '~animations/MotionListItem';
import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import ImgAxeDevToolsReport from '~images/how-its-made/axe-dev-tools-report.jpg';
import ImgPingdomSpeedTestReport from '~images/how-its-made/pingdom-speed-test.jpg';

import { ItemLink } from './ItemLink/ItemLink';
import { ViewScreenShot } from './ViewScreenShot/ViewScreenShot';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	const [expanded, setExpanded] = useState(false);

	const extraItems = [
		<MotionListItem key="eslint">
			<ItemLink href="https://eslint.org" title="Eslint">
				Eslint
			</ItemLink>{' '}
			for consistent coding style
		</MotionListItem>,
		<MotionListItem key="storybook">
			<ItemLink href="https://storybook.js.org" title="Storybook">
				Storybook
			</ItemLink>{' '}
			for component management
		</MotionListItem>,
		<MotionListItem key="husky">
			<ItemLink href="https://typicode.github.io/husky" title="Husky">
				Husky
			</ItemLink>{' '}
			for Git lifecycle automated scripts
		</MotionListItem>,
		<MotionListItem key="claude">
			Build with some assistance from{' '}
			<ItemLink href="https://claude.com" title="Claude Code">
				Claude Code
			</ItemLink>
		</MotionListItem>,
		<MotionListItem key="scss">
			<ItemLink href="https://sass-lang.com" title="Sass Land Documentation">
				SCSS
			</ItemLink>{' '}
			preprocessed styling with{' '}
			<ItemLink
				href="https://github.com/css-modules/css-modules"
				title="CSS Modules Documentation"
			>
				CSS Modules
			</ItemLink>
		</MotionListItem>,
		<MotionListItem key="motion">
			Animated with{' '}
			<ItemLink
				href="https://motion.dev/docs/react"
				title="CSS Modules Documentation"
			>
				Motion
			</ItemLink>
		</MotionListItem>,
		<MotionListItem key="axe">
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
		</MotionListItem>,
		<MotionListItem key="pingdom">
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
		</MotionListItem>,
	];

	return (
		<div className={styles.howItsMadeListContainer}>
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

				<AnimatePresence initial={false}>
					{expanded && extraItems}
				</AnimatePresence>
			</ul>

			<ReadMoreButton
				expanded={expanded}
				onToggle={() => setExpanded(!expanded)}
			/>
		</div>
	);
};
