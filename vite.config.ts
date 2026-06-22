import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const name = assetInfo.names?.[0] ?? '';
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(name))
						return 'assets/images/[name]-[hash][extname]';

					return 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
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
			'~types': path.resolve(__dirname, 'src/types'),
		},
	},
	server: {
		port: 3000,
	},
});
