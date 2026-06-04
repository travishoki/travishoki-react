import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const root = process.cwd();

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-vitest"
  ],
  "framework": "@storybook/react-vite",
  "staticDirs": ["./public"],
  viteFinal: (config) =>
    mergeConfig(config, {
      publicDir: false,
      resolve: {
        alias: {
          '~actions': path.resolve(root, 'src/redux/actions'),
          '~components': path.resolve(root, 'src/components'),
          '~const': path.resolve(root, 'src/const'),
          '~images': path.resolve(root, 'src/images'),
          '~reducers': path.resolve(root, 'src/redux/reducers'),
          '~svg': path.resolve(root, 'src/svg'),
        },
        dedupe: ['react', 'react-dom', 'react-router-dom'],
      },
    }),
};
export default config;