import { execSync } from 'child_process';

export const trimExecSync = (cmd) => {
	return execSync(cmd).toString().trim();
};
