import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { useIsMobile } from '~helpers/useIsMobile';

import { ItemLink } from './ItemLink/ItemLink';

import styles from './HowItsMadeList.module.scss';

export const HowItsMadeList = () => {
	const isMobile = useIsMobile();
	const [expanded, setExpanded] = useState(false);

	const showAll = !isMobile || expanded;

	return (
		<>
			<ul className={styles.howItsMadeList}>
				<li>
					Typed with Typescript
					<ItemLink
						link="https://www.typescriptlang.org/"
						title="Typescript NPM Module"
					/>
				</li>
				<li>
					Unit testing with Jest
					<ItemLink
						link="https://jestjs.io/docs/getting-started"
						title="Jest"
					/>
				</li>
				<li>
					Eslint for consistent coding style
					<ItemLink link="https://eslint.org/" title="Eslint" />
				</li>

				{showAll && (
					<>
						<li>
							Storybook for component management
							<ItemLink link="https://storybook.js.org/" title="Storybook" />
						</li>
						<li>
							Husky automatically runs scripts
							<ItemLink
								link="https://typicode.github.io/husky/"
								title="Husky"
							/>
						</li>
						<li>
							Build with some assistance from Claude Code
							<ItemLink link="https://claude.com/" title="Claude Code" />
						</li>
						<li>
							ADA accessibility optimization using axe DevTools
							<ItemLink
								link="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
								title="axe DevTools Google Chrome Plugin"
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
