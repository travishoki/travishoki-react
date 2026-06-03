import React from 'react';

import ImgSignature from '~images/signature/signature-travis-white.png';
import './Signature.scss';

export const Signature = () => (
	<div className="signature">
		<p className="dash">-</p>
		<img
			alt="Travis Hoki"
			className="signature-image"
			height="64"
			src={ImgSignature}
			width="100"
		/>
	</div>
);
