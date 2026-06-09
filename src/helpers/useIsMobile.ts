import { useEffect, useState } from 'react';

// Matches the `phone-down` breakpoint used across the app.
const QUERY = '(max-width: 767px)';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(
		() => window.matchMedia(QUERY).matches,
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(QUERY);
		const handleChange = () => setIsMobile(mediaQuery.matches);

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	return isMobile;
};
