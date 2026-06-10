import { execSync } from 'child_process';

import chalk from 'chalk';

const log = console.log;

export const spacer = () => log('');

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
