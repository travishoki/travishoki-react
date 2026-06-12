import React from 'react';

import classNames from 'classnames';

import { SoftwareCatalogue } from '~components/SoftwareCatalogue/SoftwareCatalogue';
import ImgYouShouldAlwaysSkateboard from '~images/passion/you-should-always-skateboard.jpg';

import { appSoftwareList } from './ChildrensBookColumn.const';
import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { ProjectImage } from '../ProjectImage/ProjectImage';

export const ChildrensBookColumn = ({
	className,
}: ChildrensBookColumnProps) => (
	<div className={classNames('col-sm-6 pt-3', className)}>
		<a
			href="https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062"
			rel="noreferrer"
			target="_blank"
			title="You Should Always Skateboard"
		>
			<Title title="Children's Book" />
			<ProjectImage
				alt="You Should Always Skateboard"
				src={ImgYouShouldAlwaysSkateboard}
			/>
			<ButtonLink text="View on Amazon" />
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

type ChildrensBookColumnProps = {
	className?: string;
};
