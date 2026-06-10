import { logLintWarningStats } from './lint.mjs';
import * as helpers from './stats.helpers.mjs';

helpers.logDeadCodeStats();
logLintWarningStats();
