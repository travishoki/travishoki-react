import React from 'react';

import './CloseButton.scss';

type CloseButtonProps = {
	onClick: () => void;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<button
		className="close-icon"
		onClick={(event) => {
			event.stopPropagation();
			onClick();
		}}
	>
		<i className="fa fa-close" />
	</button>
);
