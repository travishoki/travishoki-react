import { log } from 'console';

import chalk from 'chalk';

import { PROCESSES } from './const.mjs';
import { logDeadCodeStats } from './dead-code.mjs';
import { logLintWarningStats } from './lint.mjs';
import { logSpacer } from './logging.mjs';
import { getSelectedProcesses } from './stats.helpers.mjs';
import { logTestStats } from './test.mjs';

// -- Run --

log(chalk.bold.underline('========== Stats =========='));
logSpacer();

getSelectedProcesses()
	.then((answerProcess) => {
		const processList = answerProcess.processes;

		const deadCodeEnabled = processList.includes(PROCESSES.DEAD_CODE);
		const lintEnabled = processList.includes(PROCESSES.LINT);
		const testEnabled = processList.includes(PROCESSES.TEST);

		if (lintEnabled) logLintWarningStats();
		if (testEnabled) logTestStats();
		if (deadCodeEnabled) logDeadCodeStats();
	})
	.catch(() => {});
