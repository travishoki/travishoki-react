# Travis Hoki

Resume website
[travishoki.com](https://travishoki.com/)

## Setup

`nvm use`
`yarn install`

## Development

`yarn start` — starts the Vite dev server

## Build

`yarn build` — compiles and bundles the app for production

`yarn preview` — locally preview the production build

## Testing

`yarn test` — run the Jest test suite

`yarn test:coverage` — run tests with a coverage report

`yarn test:watch` — run tests in watch mode

## Linting & Formatting

`yarn lint` — lint JS/TS/TSX files with ESLint

`yarn lint:css` — lint SCSS files with Stylelint

`yarn lint:css:fix` — lint and auto-fix SCSS files

`yarn format` — format TS, TSX, and SCSS files with Prettier

`yarn ts-check` — run the TypeScript compiler check

## Storybook

`yarn storybook` — launch Storybook on port 6006

`yarn build-storybook` — build Storybook for deployment

Upload the `storybook-static/` directory via FTP to the root directory at [travishoki.com/storybook-static](https://travishoki.com/storybook-static).

## Utilities

`yarn bounce` — delete `node_modules` and reinstall dependencies

`yarn stats` — run the bundle stats script

`yarn deadcode-find` — list potentially unused exports via ts-prune

`yarn deadcode-count` — count the number of potentially unused exports
