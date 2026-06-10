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
		'^~actions/(.*)$': '<rootDir>/src/redux/actions/$1',
		'^~components/(.*)$': '<rootDir>/src/components/$1',
		'^~const/(.*)$': '<rootDir>/src/const/$1',
		'^~helpers/(.*)$': '<rootDir>/src/helpers/$1',
		'^~images/(.*)$': '<rootDir>/src/images/$1',
		'^~reducers/(.*)$': '<rootDir>/src/redux/reducers/$1',
		'^~svg/(.*)$': '<rootDir>/src/svg/$1',
	},
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/testing/setupTests.js'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/functions'],
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	transformIgnorePatterns: ['node_modules'],
};
