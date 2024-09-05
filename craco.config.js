const cracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			options: {
				baseUrl: '.',
				source: 'tsconfig',
				tsConfigPath: './tsconfig.json',
			},
			plugin: cracoAlias,
		},
	],
};
