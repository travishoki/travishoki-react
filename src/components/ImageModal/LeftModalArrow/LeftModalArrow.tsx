import React from 'react';

import { useLeftArrowKey } from '~components/ImageModal/ImageModal.hooks';
import { ModalArrow } from '~components/ImageModal/ModalArrow/ModalArrow';

export const LeftModalArrow = ({ onClick }: LeftModalArrowProps) => {
	useLeftArrowKey(onClick);

	return <ModalArrow direction="prev" onClick={onClick} />;
};

type LeftModalArrowProps = {
	onClick: () => void;
};
