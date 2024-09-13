import React from 'react';

import { DownloadButton } from './DownloadButton';

import './DownloadSection.scss';

export const DownloadSection = () => (
	<section className="primary list-section">
		<DownloadButton />
		<p className="center download-description">
			Open a link to the PDF Version
		</p>
	</section>
);
