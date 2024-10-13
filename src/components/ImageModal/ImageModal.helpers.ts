export const getDimensions = (srcLargeDimensions: number[]) => {
	const isMobile = window.innerWidth < 768;
	const PADDING = isMobile ? 50 : 50;

	const screenWidth = window.innerWidth - PADDING * 2;
	const screenHeight = window.innerHeight - PADDING * 2;

	const originalWidth = srcLargeDimensions[0];
	const originalHeight = srcLargeDimensions[1];

	let width: number;
	let height: number;

	const screenRatio = screenWidth / screenHeight;
	const originalRatio = originalWidth / originalHeight;

	if (screenRatio > originalRatio) {
		height = getSmallerNum(screenHeight, originalHeight);
		width = getWidthFromHeight(height, originalWidth, originalHeight);
	} else {
		width = getSmallerNum(screenWidth, originalWidth);
		height = getHeightFromWidth(width, originalWidth, originalHeight);
	}

	return [width, height];
};

export const getSmallerNum = (num1: number, num2: number): number => {
	if (num1 < num2) return num1;

	return num2;
};

export const getWidthFromHeight = (
	height: number,
	origWidth: number,
	origHeight: number,
): number => {
	const ratio = origWidth / origHeight;

	return height * ratio;
};

export const getHeightFromWidth = (
	width: number,
	origWidth: number,
	origHeight: number,
): number => {
	const ratio = origHeight / origWidth;

	return width * ratio;
};
