import { exec } from 'child_process';
import { log } from 'console';

import chalk from 'chalk';
import { Table } from 'console-table-printer';

import { logSpacer } from './logging.mjs';
import { getCoverageByPod } from './test_coverage/jestCoverage.mjs';

const percStringToColor = (str) => {
	const num = parseInt(str);

	if (num === 100) return 'green';
	if (num === 0) return 'red';

	return 'yellow';
};

const tableComponentTestCoverage = new Table({
	columns: [
		{ alignment: 'left', name: 'directory', title: 'Directory' },
		{
			maxLen: 16,
			name: 'componentFilesWithCoverage',
			title: 'Component Files with Coverage',
		},
		{
			maxLen: 16,
			name: 'componentCoverage',
			title: 'Component Files Coverage Percent',
		},
	],
});

const tableHelperTestCoverage = new Table({
	columns: [
		{ alignment: 'left', name: 'directory', title: 'Directory' },
		{
			maxLen: 16,
			name: 'helpersFilesWithCoverage',
			title: 'Helpers Files with Coverage',
		},
		{
			maxLen: 16,
			name: 'helpersFilesCoveragePerc',
			title: 'Helpers Files Coverage Percent',
		},
	],
});

const tableHookTestCoverage = new Table({
	columns: [
		{ alignment: 'left', name: 'directory', title: 'Directory' },
		{
			maxLen: 16,
			name: 'hooksFilesWithCoverage',
			title: 'Hooks Files with Coverage',
		},
		{
			maxLen: 16,
			name: 'hooksFilesCoveragePerc',
			title: 'Hooks Files Coverage Percent',
		},
	],
});

export const logTestStats = () => {
	exec(
		`yarn test --coverageReporters="json-summary" --coverage --silent`,
		() => {
			const data = getCoverageByPod();

			/* eslint-disable sort-keys */
			Object.entries(data).map(([key, value]) => {
				tableComponentTestCoverage.addRow(
					{
						directory: key,
						componentFilesWithCoverage: value.components.filesWithCoverage,
						componentCoverage: value.components.coverage,
					},
					{ color: percStringToColor(value.components.coverage) },
				);

				tableHelperTestCoverage.addRow(
					{
						directory: key,
						helpersFilesWithCoverage: value.helpers.filesWithCoverage,
						helpersFilesCoveragePerc: value.helpers.coverage,
					},
					{ color: percStringToColor(value.helpers.coverage) },
				);

				tableHookTestCoverage.addRow(
					{
						directory: key,
						hooksFilesWithCoverage: value.hooks.filesWithCoverage,
						hooksFilesCoveragePerc: value.hooks.coverage,
					},
					{ color: percStringToColor(value.hooks.coverage) },
				);
			});
			/* eslint-enable sort-keys */

			log(chalk.bold.underline('Jest Component Coverage'));
			tableComponentTestCoverage.printTable();
			logSpacer();

			log(chalk.bold.underline('Jest Helpers Coverage'));
			tableHelperTestCoverage.printTable();
			logSpacer();

			log(chalk.bold.underline('Jest Hooks Coverage'));
			tableHookTestCoverage.printTable();
			logSpacer();
		},
	);
};
