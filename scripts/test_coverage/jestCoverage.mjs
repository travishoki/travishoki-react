import { execSync } from 'child_process';
import fs from 'fs';

import minimatch from 'minimatch';

import * as helpers from './jestCoverage.helpers.mjs';

const srcUrl = '**/src';
const screensUrl = `${srcUrl}/pages`;

// Component Directories
const componentDirectories = {
	AboutPage: [`${screensUrl}/AboutPage`],
	ContactPage: [`${screensUrl}/ContactPage`],
	HomePage: [`${screensUrl}/HomePage`],
	NotFound: [`${screensUrl}/NotFoundPage`],
	ProjectsPage: [`${screensUrl}/ProjectsPage`],
	ResumePage: [`${screensUrl}/ResumePage`],
	singleProjectPage: [`${screensUrl}/singleProjectPage`],
};

// Misc Directories
const miscDirectories = {
	components: [`${srcUrl}/components`],
	const: [`${srcUrl}/const`],
	helpers: [`${srcUrl}/helpers`],
	styles: [`${srcUrl}/styles`],
	svg: [`${srcUrl}/svg`],
	types: [`${srcUrl}/types`],
};

const directoriesByScreen = {
	...componentDirectories,
	...miscDirectories,
};

const podsWithGlobPattern = Object.keys(directoriesByScreen);

export const podsAndTotal = podsWithGlobPattern.concat('uncategoried', 'total');

function readFromCoverageFile() {
	const file = fs.readFileSync('jest-coverage/coverage-summary.json', 'utf8');

	return JSON.parse(file);
}

/**
 * Returns test coverage numbers for each pod.
 * customFilePathList and customCoverageData are used for testing
 */
export const getCoverageByPod = (customFilePathList, customCoverageData) => {
	const fileCoverageByPod = getFileCoverageByPod(
		customFilePathList,
		customCoverageData,
	);

	const totalCoverageByPod = {};
	Object.keys(fileCoverageByPod).forEach((pod) => {
		const helperFiles = fileCoverageByPod[pod].filter(
			(fileWithCoverage) =>
				// Match any .ts file or helpers.tsx file
				!fileWithCoverage.path.includes('.test.') &&
				(minimatch(fileWithCoverage.path, '**/*.ts') ||
					minimatch(fileWithCoverage.path, '**/*elpers.tsx')),
		);
		const componentFiles = fileCoverageByPod[pod].filter(
			(fileWithCoverage) =>
				// Any tsx file EXCEPT helpers.tsx files, since they're captured in helpers
				!fileWithCoverage.path.includes('.test.') &&
				minimatch(fileWithCoverage.path, '**/*.tsx') &&
				!minimatch(fileWithCoverage.path, '**/*elpers.tsx'),
		);
		const hookFiles = fileCoverageByPod[pod].filter((fileWithCoverage) =>
			minimatch(fileWithCoverage.path, '**/use*.ts'),
		);

		const componentCoverages = componentFiles.map(
			(fileCoverage) => fileCoverage.coverage,
		);
		const helperCoverages = helperFiles.map(
			(fileCoverage) => fileCoverage.coverage,
		);
		const hookCoverages = hookFiles.map(
			(fileCoverage) => fileCoverage.coverage,
		);

		totalCoverageByPod[pod] = {
			components: {
				coverage: helpers.formatPercent(helpers.average(componentCoverages)),
				filesWithCoverage: componentCoverages.length,
			},
			helpers: {
				coverage: helpers.formatPercent(helpers.average(helperCoverages)),
				filesWithCoverage: helperFiles.length,
			},
			hooks: {
				coverage: helpers.formatPercent(helpers.average(hookCoverages)),
				filesWithCoverage: hookFiles.length,
			},
		};
	});

	return totalCoverageByPod;
};

/**
 * Returns all ts files under the "src" directory
 */
const tsFilesUnderSrcDir = () => {
	const output = execSync(`find $PWD/src -type f -name "*.ts*"`).toString();

	return output.split('\n');
};

/**
 * Returns glob patterns that can be used to match file paths to each pod
 */
const globPatternsByPod = () => {
	const patternsByPod = {};

	podsWithGlobPattern.forEach((pod) => {
		const directories = directoriesByScreen[pod];
		patternsByPod[pod] = directories
			.map((directory) => `${directory}/**/*.ts*`)
			.join(',');

		if (directories.length > 1) {
			patternsByPod[pod] = `{${patternsByPod[pod]}}`;
		}
	});

	return patternsByPod;
};

/**
 * Returns all ts files categorized by pod.
 * customFilePathList can is used for testing
 */
export const getFilePathsByPod = (customFilePathList) => {
	const tsFiles = customFilePathList || tsFilesUnderSrcDir();

	const globPathsByPod = globPatternsByPod();

	const filesByPod = podsWithGlobPattern.reduce((files, pod) => {
		files[pod] = tsFiles.filter((path) => minimatch(path, globPathsByPod[pod]));

		return files;
	}, {});

	const nonUncategoriedPodFiles = Object.keys(filesByPod).reduce(
		(files, pod) => files.concat(filesByPod[pod]),
		[],
	);

	filesByPod.uncategoried = tsFiles.filter(
		(file) => !nonUncategoriedPodFiles.includes(file),
	);

	// All Files
	filesByPod.total = tsFiles;

	return filesByPod;
};

/**
 * Returns a list of all files with test coverage by pod.
 * customFilePathList and customCoverageData are used for testing
 */
export const getFileCoverageByPod = (
	customFilePathList,
	customCoverageData,
) => {
	const filePathsByPod = getFilePathsByPod(customFilePathList);

	const coveragePerFile = customCoverageData || readFromCoverageFile();

	const fileCoverageByPod = podsAndTotal.reduce((filesWithCoverage, pod) => {
		filesWithCoverage[pod] = filePathsByPod[pod]
			.filter((file) => !!coveragePerFile[file]) // verify coverage exists for file
			.map((file) => ({
				coverage: coveragePerFile[file].statements.pct,
				path: file,
			}));

		return filesWithCoverage;
	}, {});

	return fileCoverageByPod;
};
