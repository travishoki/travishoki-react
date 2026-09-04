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
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|webp|svg|css|scss|sass)$':
			'<rootDir>/testing/fileMock.ts',
		'^~animations/(.*)$': '<rootDir>/src/animations/$1',
		'^~components/(.*)$': '<rootDir>/src/components/$1',
		'^~const/(.*)$': '<rootDir>/src/const/$1',
		'^~helpers/(.*)$': '<rootDir>/src/helpers/$1',
		'^~hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^~images/(.*)$': '<rootDir>/src/images/$1',
		'^~svg/(.*)$': '<rootDir>/src/svg/$1',
	},
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/testing/setupTests.js'],
	testEnvironment: 'node',
	testPathIgnorePatterns: ['<rootDir>/functions'],
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	transformIgnorePatterns: ['node_modules'],
	// This machine's Homebrew watchman install is broken (missing icu4c
	// dylib), and Jest 30 fails the whole run instead of falling back the
	// way Jest 29 did. Watchman only speeds up --watch mode's file
	// crawling; disabling it just makes Jest use its Node-based crawler.
	watchman: false,
};
