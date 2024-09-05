module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,ts}'],
	coverageDirectory: './jest-coverage',
	coveragePathIgnorePatterns: [
		'/coverage',
		'/node_modules/',
		'index.tsx',
		'package-lock.json',
		'package.json',
		'testing/',
	],
	coverageReporters: ['json'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/testing/setupTests.ts'],
	testEnvironment: 'node',
	testPathIgnorePatterns: ['<rootDir>/functions'],
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	transformIgnorePatterns: ['node_modules'],
};
