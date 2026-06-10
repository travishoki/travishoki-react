import { log } from 'console';

import chalk from 'chalk';

import { logSpacer } from './logging.mjs';
import { trimExecSync } from './strings.mjs';

export const logDeadCodeStats = () => {
	log(chalk.bold.underline('Find Dead Code '));
	const output = trimExecSync('yarn deadcode-find');
	const isSuccessfull = output === '$ ts-prune';

	if (isSuccessfull) {
		log(chalk.green('Success'));
	} else {
		log(chalk.red('Fail'));
		log(output);
	}

	logSpacer();
};
