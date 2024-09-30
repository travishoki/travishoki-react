import React, { ReactElement } from 'react';

import { svgDefaultProps } from './const';

const viewWidth = 56.693;
const viewHeight = 56.693;

export const SvgIconInstagram = ({
	className,
	color = svgDefaultProps.color,
	size = svgDefaultProps.size,
}: SvgIconInstagramType): ReactElement => (
	<svg
		className={className}
		height={size}
		viewBox={`0 0 ${viewWidth} ${viewHeight}`}
		width={size}
	>
		<path
			d="M43.414,4.831H13c-5.283,0-9.581,4.297-9.581,9.58v10.12v20.295c0,5.283,4.298,9.58,9.581,9.58h30.415  c5.283,0,9.58-4.297,9.58-9.58V24.53v-10.12C52.994,9.127,48.697,4.831,43.414,4.831z M46.162,10.544l1.096-0.004v1.091v7.312  l-8.375,0.027l-0.029-8.402L46.162,10.544z M21.131,24.53c1.588-2.197,4.164-3.638,7.076-3.638s5.488,1.441,7.074,3.638  c1.033,1.434,1.652,3.188,1.652,5.088c0,4.811-3.918,8.725-8.727,8.725c-4.812,0-8.726-3.914-8.726-8.725  C19.481,27.718,20.098,25.964,21.131,24.53z M48.164,44.825c0,2.621-2.131,4.75-4.75,4.75H13c-2.62,0-4.751-2.129-4.751-4.75V24.53  h7.4c-0.639,1.572-0.998,3.289-0.998,5.088c0,7.473,6.08,13.557,13.556,13.557c7.475,0,13.555-6.084,13.555-13.557  c0-1.799-0.361-3.516-1-5.088h7.402V44.825z"
			fill={color}
		/>
	</svg>
);

SvgIconInstagram.displayName = 'SvgIconInstagram';

/*-------------------- Types --------------------*/

type SvgIconInstagramType = {
	className?: string;
	color?: string;
	size?: number;
};
