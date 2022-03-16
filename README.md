# ajaib-frontend-test

> Ajaib Frontend Test is my repo for the solutions of assignment to Ajaib's hiring process.



## Stack used

- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://typescriptlang.org/)
- [GridJS](https://gridjs.io)
- [React Router](https://reactrouter.com)

## Developing

A Node.js LTS setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn start

# build for production
yarn build

# check error & warning type
yarn lint

# fix all error & warning type
yarn lint-fix
```

## Architecture


**Performance boost:** We wrap a Table to [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

### State management

We use [Redux](https://redux.js.org) for our state management. Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors, and other forms of bugs that might come up during production.

We use Redux to track the state of our app's filter settings.

### Debounced search

We using `lodash/debounce` to delay updating of the URL until the user has stopped typing.