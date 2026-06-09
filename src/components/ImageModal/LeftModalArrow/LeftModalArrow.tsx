import React from 'react';

import { useLeftArrowKey } from '../ImageModal.hooks';
import { ModalArrow } from '../ModalArrow/ModalArrow';

type LeftModalArrowProps = {
	onClick: () => void;
};

export const LeftModalArrow = ({ onClick }: LeftModalArrowProps) => {
	useLeftArrowKey(onClick);

	return <ModalArrow direction="prev" onClick={onClick} />;
};
