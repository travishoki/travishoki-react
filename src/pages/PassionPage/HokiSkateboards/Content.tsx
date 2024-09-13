import React from 'react';

import { SoftwareListHorizontal } from '~components/SoftwareListHorizontal/SoftwareListHorizontal';
import { TechListHorizontal } from '~components/TechListHorizontal/TechListHorizontal';
import {
	ILLUSTRATOR,
	INDESIGN,
	PHOTOSHOP,
	SoftwareKeys,
} from '~const/Software.const';
import {
	CSS,
	HTML,
	JAVSCRIPT,
	PHP,
	REACT_JS,
	TechKeys,
	WORDPRESS,
} from '~const/Tech.const';
import ImgHokiSkateboardsLogo from '~images/passion/hoki-skateboards.jpg';
import ImgYouShouldAlwaysSkateboard from '~images/passion/you-should-always-skateboard.jpg';

import { Title } from './Title';
import './Content.scss';

import { PassionLabel } from './PassionLabel';

const websiteTechList: (keyof TechKeys)[] = [
	CSS,
	HTML,
	JAVSCRIPT,
	PHP,
	REACT_JS,
	WORDPRESS,
];
const appSoftwareList: (keyof SoftwareKeys)[] = [
	ILLUSTRATOR,
	INDESIGN,
	PHOTOSHOP,
];

export const Content = () => (
	<div className="hoki-skateboards-inner-content">
		<div className="row">
			<div className="col-sm-6">
				<a
					href="https://hokiskateboards.com"
					rel="noreferrer"
					target="_blank"
					title="Hoki Skateboards"
				>
					<Title title="Retail Website" />
					<img
						alt="Hoki Skateboards"
						className="center product-image"
						src={ImgHokiSkateboardsLogo}
					/>
					<p className="button-link">Go to Site</p>
				</a>
				<PassionLabel>Description:</PassionLabel>
				<p>
					Hoki Skateboards is a small family-owned online skateboard company.
				</p>

				<PassionLabel>Technology:</PassionLabel>
				<TechListHorizontal list={websiteTechList} />
				<p>
					Built in Wordpress with a custom Wordpress Plugin, using Woocommerce,
					PHP and React.
				</p>
			</div>
			<div className="col-sm-6">
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
				<p>Illustrated kid&apos;s book about skateboarding.</p>
				<PassionLabel>Contribution:</PassionLabel>
				<p>
					Self authored, illustrated, and published. Successfully Kickstarter
					backed.
				</p>
				<p>Software:</p>
				<SoftwareListHorizontal list={appSoftwareList} />
			</div>
		</div>
	</div>
);
