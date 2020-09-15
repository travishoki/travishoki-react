import React from 'react';

import SocialMedia from './SocialMedia';
const hokiSkateboardsImage = require('../../../../images/home/hoki-skateboards.jpg');
const youShouldAlwaysSkateboardImage = require('../../../../images/home/you-should-always-skateboard.jpg');


const HokiSkateboards = () => (
	<div className="hoki-skateboards">
		<div className="hoki-skateboards-inner">
			<h3>Passion Project</h3>

			<a
				title="Hoki Skateboards"
				href="https://hokiskateboards.com"
				target="_blank"
				className="hoki-skateboards-logo"
			>
				<img
					alt="Hoki Skateboards"
					src="http://links.hokiskateboards.com/images/logo.png"
					className="center"
				/>
			</a>

			<div className="row hoki-skateboards-inner-content">
				<div className="col-sm-6">
					<a
						title="Hoki Skateboards"
						href="https://hokiskateboards.com"
						target="_blank"
					>
						<img
							alt="Hoki Skateboards"
							src={hokiSkateboardsImage}
							className="center"
						/>
					</a>
					<p>Hoki Skateboards is a small family-owned online skateboard company.</p>
				</div>
				<div className="col-sm-6">
					<a
						title="You Should Always Skateboard"
						href="https://www.amazon.com/gp/product/173400830X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173400830X&linkCode=as2&tag=hokiskatebo0f-20&linkId=d66288b7c17823a393fe530309328062"
						target="_blank"
					>
						<img
							alt="You Should Always Skateboard"
							src={youShouldAlwaysSkateboardImage}
						/>
					</a>
					<p>Illustrated kid's book about skateboarding.</p>
				</div>
			</div>

			<SocialMedia />
		</div>
	</div>
);

export default HokiSkateboards;
