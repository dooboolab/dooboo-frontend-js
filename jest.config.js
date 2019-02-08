module.exports = {
  'verbose': true,
  'coverageDirectory': './coverage/',
  'coveragePathIgnorePatterns': [
    '/node_modules/',
    '/test/',
  ],
  'collectCoverage': true,
  'globals': {
    'window': {},
  },
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  },
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  'modulePathIgnorePatterns': [
    'lib'
  ],
  'setupFiles': [
    './test/jestSetup.js'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  'moduleFileExtensions': [
    'js',
    'jsx',
    'json'
  ]
};
