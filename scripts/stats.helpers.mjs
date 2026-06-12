import inquirer from 'inquirer';

import { PROCESSES } from './const.mjs';

export const getSelectedProcesses = () => {
	const processArray = Object.values(PROCESSES);

	return inquirer.prompt([
		{
			choices: processArray,
			message: 'Which processe(s)?',
			name: 'processes',
			type: 'checkbox',
			validate: async (value) => {
				if (value.length === 0) {
					return 'Please select at least one process!';
				}

				return true;
			},
		},
	]);
};
