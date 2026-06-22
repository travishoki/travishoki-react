import React from 'react';

import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';
import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import ImgYouShouldAlwaysSkateboard from '~images/passion/hoki-skateboards/you-should-always-skateboard.jpg';

import { appSoftwareList } from './SkateBookPage.const';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { ProjectImageLink } from '../HokiSkateboardsPage/ProjectImageLink/ProjectImageLink';
import { Title } from '../Title/Title';

const AMAZON_HREF =
	'https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062';

export const SkateBookPage = () => (
	<section>
		<div className="boxed-xl">
			<div className="mb-3">
				<Title className="m-0" title="Children's Book" />
				<p className="center">Written and Illustrated by Travis Hoki</p>
			</div>
			<div className="row gy-3">
				<div className="col-sm-6">
					<ProjectImageLink
						alt="You Should Always Skateboard"
						href={AMAZON_HREF}
						src={ImgYouShouldAlwaysSkateboard}
						title="You Should Always Skateboard"
					/>
					<ParagraphBlock
						label="Book Description"
						text={[
							'Have you ever gone skateboarding on the moon? Or tried to skate through a snowstorm? How about boarding through the jungle trees with monkeys? Join Axle on an adventure of trying to skateboard in the most unlikely places.',
						]}
					/>
					<ButtonLink href={AMAZON_HREF} text="View on Amazon" />
				</div>
				<div className="col-sm-6">
					<ParagraphBlock
						label="Project Description"
						text={[
							"Illustrated kid's book about skateboarding. Self authored, illustrated, and published. Successfully Kickstarter backed.",
						]}
					/>
					<SoftwareCatalogue list={appSoftwareList} />
				</div>
			</div>
		</div>
	</section>
);
