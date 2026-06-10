import { exec } from 'child_process';
import { log } from 'console';

import chalk from 'chalk';

import { spacer } from './logging.mjs';

const matchCount = (string, subString) => {
	return string.split(subString).length - 1;
};

export const logLintWarningStats = () => {
	exec('yarn lint --fix', (_err, stdout) => {
		// const noUnusedVarTotal = matchCount(stdout, 'no-unused-var');
		const total = matchCount(stdout, ' warning ');

		log(chalk.bold.underline('Lint Warnings'));
		// log(`No Unused Var: ${noUnusedVarTotal}`);
		log(`Total: ${total}`);

		spacer();
	});
};
