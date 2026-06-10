import { log } from 'console';

import chalk from 'chalk';

import { logDeadCodeStats } from './dead-code.mjs';
import { logLintWarningStats } from './lint.mjs';
import { logSpacer } from './logging.mjs';
import { logTestStats } from './test.mjs';

// -- Run --

log(chalk.bold.underline('========== Stats =========='));
logSpacer();

logLintWarningStats();
logTestStats();
logDeadCodeStats();
