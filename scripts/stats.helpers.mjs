import { exec, execSync } from 'child_process';

import chalk from 'chalk';

const log = console.log;

const matchCount = (string, subString) => {
	return string.split(subString).length - 1;
};

export const spacer = () => log('');

const trimExecSync = (cmd) => {
	return execSync(cmd).toString().trim();
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
