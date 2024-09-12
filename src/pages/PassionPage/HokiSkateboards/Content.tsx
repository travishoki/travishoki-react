import React from 'react';

import ImgHokiSkateboardsLogo from '~images/passion/hoki-skateboards.jpg';
import ImgYouShouldAlwaysSkateboard from '~images/passion/you-should-always-skateboard.jpg';
import {
	CSS,
	HTML,
	JAVSCRIPT,
	PHP,
	REACT_JS,
	TechKeys,
	WORDPRESS,
} from '~const/Tech.const';

import Title from './Title';
import './Content.scss';
import TechList from 'src/pages/ResumePage/TechList';

const websiteTechs: (keyof TechKeys)[] = [
	CSS,
	HTML,
	JAVSCRIPT,
	PHP,
	REACT_JS,
	WORDPRESS,
];

const Content = () => (
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
						className="center"
						src={ImgHokiSkateboardsLogo}
					/>
					<p className="button-link">Go to Site</p>
				</a>
				<p>
					Description:
					<br />
					Hoki Skateboards is a small family-owned online skateboard company.
				</p>
				<p>
					Tech:
					<TechList techs={websiteTechs} />
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
						src={ImgYouShouldAlwaysSkateboard}
					/>
					<p className="button-link">View on Amazon</p>
				</a>
				<p>
					Description:
					<br />
					Illustrated kid&apos;s book about skateboarding.
				</p>
				<p>
					Contribution:
					<br />
					Self authored, illustrated, and published. Successfully Kickstarter
					backed.
				</p>
			</div>
		</div>
	</div>
);

export default Content;
