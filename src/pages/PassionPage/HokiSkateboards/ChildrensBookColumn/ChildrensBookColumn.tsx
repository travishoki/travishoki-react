import React from 'react';

import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import { SoftwareKey } from '~const/Software.const';
import ImgYouShouldAlwaysSkateboard from '~images/passion/you-should-always-skateboard.jpg';

import { PassionLabel } from '../PassionLabel/PassionLabel';
import { Title } from '../Title/Title';

const appSoftwareList: SoftwareKey[] = [
	'ILLUSTRATOR',
	'INDESIGN',
	'PHOTOSHOP',
	'PREMIER_PRO',
	'PROCREATE',
];

export const ChildrensBookColumn = () => (
	<div className="hoki-skateboards-inner-content-col col-sm-6 pt-3">
		<a
			href="https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062"
			rel="noreferrer"
			target="_blank"
			title="You Should Always Skateboard"
		>
			<Title title="Children's Book" />
			<img
				alt="You Should Always Skateboard"
				className="center product-image"
				src={ImgYouShouldAlwaysSkateboard}
			/>
			<p className="button-link">View on Amazon</p>
		</a>

		<PassionLabel>Description:</PassionLabel>
		<p className="indent">Illustrated kid&apos;s book about skateboarding.</p>
		<p className="indent">
			Self authored, illustrated, and published. Successfully Kickstarter
			backed.
		</p>

		<SoftwareCatalogue list={appSoftwareList} />
	</div>
);
