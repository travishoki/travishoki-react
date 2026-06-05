import React from 'react';

import { DownloadButton } from '../DownloadButton/DownloadButton';

export const DownloadSection = () => (
	<section className="primary list-section">
		<DownloadButton />
		<p className="center m-0">Open a link to the PDF Version</p>
	</section>
);
