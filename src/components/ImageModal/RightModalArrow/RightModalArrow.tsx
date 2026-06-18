import React from 'react';

import { useRightArrowKey } from '~components/ImageModal/ImageModal.hooks';
import { ModalArrow } from '~components/ImageModal/ModalArrow/ModalArrow';

export const RightModalArrow = ({ onClick }: RightModalArrowProps) => {
	useRightArrowKey(onClick);

	return <ModalArrow direction="next" onClick={onClick} />;
};

type RightModalArrowProps = {
	onClick: () => void;
};
