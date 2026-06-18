export type Size = {
	height: number;
	width: number;
};

// The space the video can occupy: from the top of its own container down to the
// top of the footer, and the container's width. Because the container already
// sits below the header and the page <h1>, measuring from its top inherently
// excludes the header, the heading, and any spacing above it — and the footer is
// excluded by stopping at the footer's top.
export const getAvailableFrame = (container: HTMLElement | null): Size => {
	if (!container) return { height: 0, width: 0 };

	const footer = document.querySelector('[data-app-footer]');
	const frameBottom = footer
		? footer.getBoundingClientRect().top
		: window.innerHeight;
	const frameTop = container.getBoundingClientRect().top;

	return {
		height: Math.max(0, frameBottom - frameTop),
		width: container.clientWidth,
	};
};

// Largest width/height that preserves the natural aspect ratio while fitting
// inside the frame (a "contain" fit).
export const getContainedSize = (
	naturalWidth: number,
	naturalHeight: number,
	frame: Size,
): Size => {
	if (naturalWidth <= 0 || naturalHeight <= 0) {
		return { height: 0, width: 0 };
	}

	const scale = Math.min(
		frame.width / naturalWidth,
		frame.height / naturalHeight,
	);

	return {
		height: Math.round(naturalHeight * scale),
		width: Math.round(naturalWidth * scale),
	};
};
