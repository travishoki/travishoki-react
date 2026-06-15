const path = require('path');

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
	style: {
		sass: {
			loaderOptions: {
				// Put `src` on the Sass load path so any module can resolve the
				// shared tokens/mixins with `@use 'styles' as *;` regardless of how
				// deeply nested it is. sass-loader v12 uses the legacy Sass API, so
				// the option is `includePaths` (not `loadPaths`).
				sassOptions: {
					includePaths: [path.resolve(__dirname, 'src')],
				},
			},
		},
	},
};
