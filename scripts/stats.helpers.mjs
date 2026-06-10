import { execSync } from 'child_process';
import { log } from 'console';

import chalk from 'chalk';

import { spacer } from './logging.mjs';

const trimExecSync = (cmd) => {
	return execSync(cmd).toString().trim();
};

export const logDeadCodeStats = () => {
	log(chalk.bold.underline('Find Dead Code '));
	const output = trimExecSync('yarn find-deadcode');
	const isSuccessfull = output === '$ ts-prune';

	if (isSuccessfull) {
		log(chalk.green('Success'));
	} else {
		log(chalk.red('Fail'));
		log(output);
	}

	spacer();
};
