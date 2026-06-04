import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
	plugins: [storybookTest()],
	test: {
		browser: {
			enabled: true,
			headless: true,
			instances: [{ browser: 'chromium' }],
			provider: playwright(),
		},
		name: 'storybook',
		setupFiles: ['.storybook/vitest.setup.ts'],
	},
});
