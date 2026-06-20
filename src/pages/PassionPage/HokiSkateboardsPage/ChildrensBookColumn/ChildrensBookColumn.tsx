import React from 'react';

import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';
import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import ImgYouShouldAlwaysSkateboard from '~images/passion/hoki-skateboards/you-should-always-skateboard.jpg';

import { appSoftwareList } from './ChildrensBookColumn.const';
import { ButtonLink } from '../../ButtonLink/ButtonLink';
import { Title } from '../../Title/Title';
import { ProjectImageLink } from '../ProjectImageLink/ProjectImageLink';

const AMAZON_HREF =
	'https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062';

export const ChildrensBookColumn = () => (
	<>
		<Title title="Children's Book" />
		<ProjectImageLink
			alt="You Should Always Skateboard"
			href={AMAZON_HREF}
			src={ImgYouShouldAlwaysSkateboard}
			title="You Should Always Skateboard"
		/>
		<ButtonLink href={AMAZON_HREF} text="View on Amazon" />

		<ParagraphBlock
			label="Description"
			text={[
				"Illustrated kid's book about skateboarding.",
				'Self authored, illustrated, and published. Successfully Kickstarter backed.',
			]}
		/>

		<SoftwareCatalogue list={appSoftwareList} />
	</>
);
