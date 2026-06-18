import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'node_modules'),
				],
			},
		},
	},
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			'~animations': path.resolve(__dirname, 'src/animations'),
			'~components': path.resolve(__dirname, 'src/components'),
			'~const': path.resolve(__dirname, 'src/const'),
			'~helpers': path.resolve(__dirname, 'src/helpers'),
			'~hooks': path.resolve(__dirname, 'src/hooks'),
			'~images': path.resolve(__dirname, 'src/images'),
			'~svg': path.resolve(__dirname, 'src/svg'),
		},
	},
	server: {
		port: 3000,
	},
});
