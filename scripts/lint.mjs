import { exec } from 'child_process';
import { log } from 'console';

import chalk from 'chalk';

import { logSpacer } from './logging.mjs';

const matchCount = (string, subString) => {
	return string.split(subString).length - 1;
};

export const logLintWarningStats = () => {
	exec('yarn lint --fix', (_err, stdout) => {
		const total = matchCount(stdout, ' warning ');

		if (total > 0) {
			log(chalk.bold.underline('Lint Warnings'));
			log(`Total: ${total}`);
		} else {
			log(chalk.green('Success'));
		}

		logSpacer();
	});
};
