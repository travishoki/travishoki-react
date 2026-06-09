import { useEffect } from 'react';

export const useScrollLock = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'scroll';
		};
	}, []);
};

export const useCloseOnEscape = (onClose: () => void) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);
};

export const useArrowKeyNavigation = (
	onPrev?: () => void,
	onNext?: () => void,
) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				onPrev?.();
			}

			if (event.key === 'ArrowRight') {
				onNext?.();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onNext, onPrev]);
};
