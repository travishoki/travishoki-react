import { useEffect } from 'react';

export const useScrollLock = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'scroll';
		};
	}, []);
};

const useKeyDown = (key: string, onPress: () => void) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === key) {
				onPress();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [key, onPress]);
};

export const useCloseOnEscape = (onClose: () => void) => {
	useKeyDown('Escape', onClose);
};

export const useLeftArrowKey = (onPress: () => void) => {
	useKeyDown('ArrowLeft', onPress);
};

export const useRightArrowKey = (onPress: () => void) => {
	useKeyDown('ArrowRight', onPress);
};
