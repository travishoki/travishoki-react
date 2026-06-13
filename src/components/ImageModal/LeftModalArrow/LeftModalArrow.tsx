import React from 'react';

import { useLeftArrowKey } from '../ImageModal.hooks';
import { ModalArrow } from '../ModalArrow/ModalArrow';

export const LeftModalArrow = ({ onClick }: LeftModalArrowProps) => {
	useLeftArrowKey(onClick);

	return <ModalArrow direction="prev" onClick={onClick} />;
};

type LeftModalArrowProps = {
	onClick: () => void;
};
