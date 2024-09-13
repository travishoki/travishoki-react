import React from 'react';

import './DownloadButton.scss';

const DownloadButton = () => (
	<a
		className="btn btn-primary btn-lg download-button"
		href="http://travishoki.com/travis-hoki-resume.pdf"
		rel="noreferrer"
		target="_blank"
	>
		<i className="fa fa-download" /> Download
	</a>
);

export default DownloadButton;
