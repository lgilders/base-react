# base-react / benefits-portal

## REQUIREMENTS
1. Command Line Interface (CLI) of your choice
2. `node` installed
3. `npm` OR `yarn` installed

## INSTALLATION
Navigate to the folder containing the `package.json` file and run `npm install` OR `yarn install`

## DEPLOYMENT
Run `npm start` or `yarn start` to spin up the local development environment at [localhost](localhost:8080).

Run `npm run build` or `yarn run build` and then run `npx http-server dist` to spin up a production version of the project.

### INCLUDES
1. **ESLint** - with configuration to match the one used for *create-react-app*; see [this page](https://www.npmjs.com/package/eslint-config-react-app) for details
2. **SVG components** - run `npm run svgr` or `yarn run svgr` to compile SVGs from the `src/assets/svgs` folder to the `src/constants/Icons` folder as individual components
3. **Alias support** - see `.babelrc` for examples of how to make new aliases for each component
4. **CSS Modules** - see `src/components/Link` for an example component using this styling
5. **Global variables/styles** - see `src/App.css` for global styling variables
6. **CLSX support** for styling - simplifies conditional application of classnames; see [this page](https://www.npmjs.com/package/clsx) for details
7. **ENV support** - see `.env.development` and `.env.production` files for details; see `build-utils/webpack.dev.js` and `build-utils/webpack.prod.js` for details
8. **Prettier** - with configuration and interoperability with ESLint



TODO - add translations, add MaterialUI, add themeing, add Storybook