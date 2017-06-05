# photo-gallery

## Get Started

Yarn is not required. Anywhere it says `yarn <command>` you can sub in `npm run <command>`.

Upon install:

1. Run `yarn` or `npm install`
1. Put your Flickr credentials in flickr_crendentials.json in the format: `{"api_key": "<your key here>", "secret": "<your secret here>"}`.

For development

1. Run `yarn dev:api` in one terminal
1. Run `yarn dev` in another terminal
1. Open http://localhost:8080 in a browser

For production

1. Run `yarn build`
1. Run `yarn start`
1. Open http://localhost:3000 in a browser.

## Commands

- `build`: Runs [Webpack][webpack] to build a production build of your CSS and JS
- `dev`: Runs the [webpack-dev-server][wds] which runs a local server on 8080, builds and serves dev builds of your JS and CSS  as well as proxies requests to your API server
- `dev:api`: Runs a local API server that proxies the Flickr API
- `format`: Runs the code through [Prettier][prettier], a JavaScript code formatter
- `lint`: Runs the code through [ESLint][eslint]. This code adheres to the [Airbnb rules][airbnb] (inasmuch they don't conflict with Prettier)
- `size-css`: Prints out the size of the CSS after minification and gzip
- `size-js`: Prints out the size of the JS after minification and gzip
- `start`: Runs a production-ready [Express][express] server that proxies the Flickr API as well as serves your already built CSS and JS on http://localhost:3000
- `test`: Runs the [Jest][jest] test suite
- `test:update`: Updates the Jest [snapshots][snapshots]
- `types`: Runs the [Flow][flow] static type checker
- `validate`: Runs the full suite: format, lint, types, test, size-css and size-js

## Built With

- Node
- Webpack
- Babel w/ preset-env and static class properties
- Preact
- Preact-Router
- Postcss, cssnano, and cssnext
- Flow
- ESLint
- Prettier
- Jest
- Express

## Final results

- gzip and minified JS: 7.11KB
- gzip and minified CSS: 1.43KB
- Tested with 18 unit tests, linted, and statically typed
- Google Lighthouse
  - Performance: 97
  - Accessibility: 94
  - Best Practices: 83 (not using HTTP2 or manifest)

## Directions to Go

- Service worker: was planned and architected to use, just ran out of time
- Server-side rendering: had it finished but greatly increased complexity of code, little gain
- Code-splitting: app is already tiny; the savings would be too small to justify complexity
- More gestures: swiping between images
- Pagination on search images


[express]: https://expressjs.com/
[prettier]: https://github.com/prettier/prettier
[eslint]: http://eslint.org/
[airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[jest]: https://facebook.github.io/jest/
[snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html#content
[flow]: https://flow.org/
[wds]: https://webpack.js.org/configuration/dev-server/
[webpack]: https://webpack.js.org/
