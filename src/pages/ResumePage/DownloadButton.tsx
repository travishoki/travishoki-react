import React from 'react';

import './DownloadButton.scss';

export const DownloadButton = () => (
	<a
		className="btn btn-secondary btn-lg download-button"
		href="http://travishoki.com/travis-hoki-resume.pdf"
		rel="noreferrer"
		target="_blank"
	>
		<i className="fa fa-download" /> Download
	</a>
);
