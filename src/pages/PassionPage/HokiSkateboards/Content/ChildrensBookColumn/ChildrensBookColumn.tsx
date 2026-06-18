import React from 'react';

import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import ImgYouShouldAlwaysSkateboard from '~images/passion/hoki-skateboards/you-should-always-skateboard.jpg';

import { appSoftwareList } from './ChildrensBookColumn.const';
import { ButtonLink } from '../../../ButtonLink/ButtonLink';
import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';
import { ProjectImage } from '../ProjectImage/ProjectImage';

const AMAZON_HREF =
	'https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062';

export const ChildrensBookColumn = () => (
	<>
		<Title title="Children's Book" />
		<a
			href={AMAZON_HREF}
			rel="noreferrer"
			target="_blank"
			title="You Should Always Skateboard"
		>
			<ProjectImage
				alt="You Should Always Skateboard"
				src={ImgYouShouldAlwaysSkateboard}
			/>
		</a>
		<ButtonLink href={AMAZON_HREF} text="View on Amazon" />

		<PassionLabel>Description:</PassionLabel>
		<p className="indent">Illustrated kid&apos;s book about skateboarding.</p>
		<p className="indent">
			Self authored, illustrated, and published. Successfully Kickstarter
			backed.
		</p>

		<SoftwareCatalogue list={appSoftwareList} />
	</>
);
