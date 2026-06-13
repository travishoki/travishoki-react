import React from 'react';

import { useRightArrowKey } from '../ImageModal.hooks';
import { ModalArrow } from '../ModalArrow/ModalArrow';

export const RightModalArrow = ({ onClick }: RightModalArrowProps) => {
	useRightArrowKey(onClick);

	return <ModalArrow direction="next" onClick={onClick} />;
};

type RightModalArrowProps = {
	onClick: () => void;
};
