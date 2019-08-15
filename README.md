### Deprecated

> This boilperlate is currently deprecated since `dooboo-cli` started to focus on `typescript` projects from `2.0.0`. This can live again when game changes but currently deprecated.

# React Flow Boilerplate

[![codecov](https://codecov.io/gh/dooboolab/dooboo-frontend-js/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/dooboo-frontend-js)
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-frontend-js.svg?style=svg)](https://circleci.com/gh/dooboolab/dooboo-frontend-js) [![Greenkeeper badge](https://badges.greenkeeper.io/dooboolab/dooboo-frontend-js.svg)](https://greenkeeper.io/)

> Specification

- [react-native](https://github.com/facebook/react-native)
- [react-router](https://github.com/ReactTraining/react-router)
- [flow](https://github.com/facebook/flow)
- [styled-components](https://github.com/styled-components/styled-components)
- [jest](https://github.com/facebook/jest)
- [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [react-hook](https://reactjs.org/docs/hooks-intro.html)

### Gain points

```
1. Sample of context-api with `react-hook` (`useContext`).
2. Know how to structure react web app with `flow`.
3. Know how to navigate between screens with `react-router`.
4. Know how to write test code with `react-native-testing-library`.
5. Know how to `lint` your project with `eslint`.
6. [Know how to localize your project](https://github.com/dooboolab/dooboo-frontend-js/blob/master/STRINGS.js).
7. [Know how to place your `retina image` into your project](https://github.com/dooboolab/dooboo-frontend-ts/blob/master/src/utils/Icons.js).
8. Know how to use `styled-component`.
9. [Know how to implement theming with styled-component](https://github.com/dooboolab/dooboo-frontend-ts/blob/master/src/theme.ts).
  - [Dark Mode]
    ![image](https://user-images.githubusercontent.com/27461460/58620208-815be500-8301-11e9-9a00-2ceaca7c93f5.png)
  - [Light Mode]
    ![image](https://user-images.githubusercontent.com/27461460/58620232-8f116a80-8301-11e9-8b55-3bb2a743dff8.png)

```

### Structures

```text
app/
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ docs // explanation for dev stack we used. (Sorry for Korean)
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│     └─ navigation
│     └─ screen
│     └─ shared
│  └─ utils
│  └─ ui
│  └─ contexts
│  └─ providers
│  └─ index.js
│  └─ theme.js // global variables for theming in `styled-components`
├─ test/
├─ .gitignore
├─ .eslintignore
├─ .eslintrc.js
├─ babel.config.js
├─ jest.config.js
├─ package.json
├─ README.md
├─ STRINGS.js
├─ webpack.config.js
└─ webpack.config.prod.js
```

### Install and running the project

Installing and running the project is as simple as running

```sh
yarn && yarn start
```

- Note that we recommend using yarn.

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

### Testing the project

Testing is also just a command away:

```sh
yarn test

> dooboo-starter@1.0.0 test /Users/hyochan/Documents/Github/dooboolab/dooboo-frontend-js
> jest -u

 PASS  src/components/screen/__tests__/Temp.test.js
  Temp page DOM rendering test
    ✓ component and snapshot matches (34ms)
  Interaction
    ✓ Simulate onClick (2ms)

 PASS  src/components/shared/__tests__/Button.test.js
  Button shared component test
    ✓ component and snapshot matches (38ms)
  Button Interaction
    ✓ Simulate onClick (1ms)

 PASS  src/components/screen/__tests__/Intro.test.js
  Intro page DOM rendering test
    ✓ component and snapshot matches (31ms)
  Interaction
    ✓ Simulate onClick (1ms)

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   3 passed, 3 total
Time:        2.684s
Ran all test suites.
```

### Theming

We use `styled-component` to provide theming. We recommend to use color variables inside `theme.js` and use it else where. We handle this with `context-api` with `react-hook` inside `AppProvider.js`

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      return { ...state, user: action.payload };
    case 'change-theme-mode':
      return { ...state, theme: action.payload.theme };
  }
};

function AppProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
```

### Creating components

> Copy sourcecode in /src/components/screen/Temp.js
> Copy sourcecode in /src/components/screen/**test**/Temp.test.js
> Create new js file with compnent name you will create

To do above more easily, you can simly install [dooboo-cli](https://www.npmjs.com/package/dooboo-cli). Then you can easily create [screen] or [shared] components along with `test file` by running below commands.

```sh
# screen component
dooboo screen [MyScreen]
# shared component
dooboo shared [MyShared]
```

### Writing tests with Jest

We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `yarn test` to test if it succeeds and look more closer opening the source.

### Localization

We've defined Localization class in `src/models/Localization.js`. This model class is used in mobx store which is `src/stores/appStore.js`. Localization model imports `STRINGS.js` which handles localized strings.

```
const STRINGS = {
  en: { // English
    SIGNUP: 'SIGN UP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GOOGLE_LOGIN: 'LOGIN WITH GOOGLE',
    FACEBOOK_LOGIN: 'LOGIN WITH FACEBOOK',
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    COMPLETE: 'DONE',
  },
  ko: { // Korean
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    GOOGLE_LOGIN: '구글 로그인',
    FACEBOOK_LOGIN: '페이스북 로그인',
    EMAIL: '이메일',
    PASSWORD: '패스워드',
    COMPLETE: '완료',
  },
  ...
```

In `index.js` when app starts it search for navigator's locale and set mobx state.

```
  const userLang: string = navigator.language;
  const localization = new Localization();
  localization.setLocale(userLang);
  store.setLocale(localization);
  ...
```

### React version

16.8

### react-router-dom version

4
