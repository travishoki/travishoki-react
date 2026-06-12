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
					Typed with{' '}
					<ItemLink
						href="https://www.typescriptlang.org/"
						title="Typescript NPM Module"
					>
						Typescript
					</ItemLink>
				</li>
				<li>
					Unit testing with{' '}
					<ItemLink href="https://jestjs.io/docs/getting-started" title="Jest">
						Jest
					</ItemLink>
				</li>
				<li>
					<ItemLink href="https://eslint.org/" title="Eslint">
						Eslint
					</ItemLink>{' '}
					for consistent coding style
				</li>

				{showAll && (
					<>
						<li>
							<ItemLink href="https://storybook.js.org/" title="Storybook">
								Storybook
							</ItemLink>{' '}
							for component management
						</li>
						<li>
							<ItemLink href="https://typicode.github.io/husky/" title="Husky">
								Husky
							</ItemLink>{' '}
							automatically runs scripts
						</li>
						<li>
							Build with some assistance from{' '}
							<ItemLink href="https://claude.com/" title="Claude Code">
								Claude Code
							</ItemLink>
						</li>
						<li>
							ADA accessibility optimization using{' '}
							<ItemLink
								href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
								title="axe DevTools Google Chrome Plugin"
							>
								axe DevTools
							</ItemLink>
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
