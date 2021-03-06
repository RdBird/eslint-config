// prettier-ignore
const restrictedProperties = [
  {
    object: 'arguments',
    property: 'callee',
    message: 'arguments.callee is deprecated',
  },
  {
    property: '__defineGetter__',
    message: 'Please use Object.defineProperty instead.',
  },
  {
    property: '__defineSetter__',
    message: 'Please use Object.defineProperty instead.',
  },
  {
    object: 'Math',
    property: 'pow',
    message: 'Use the exponentiation operator (**) instead.',
  },
];
const restrictedSyntax = [
  {
    selector: 'ForInStatement',
    message:
      'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: 'ForOfStatement',
    message:
      'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
  },
  {
    selector: 'LabeledStatement',
    message:
      'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'WithStatement',
    message:
      '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  },
];

module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': 'off',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-notation': ['error', { allowKeywords: true }],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', { before: 'always', after: 'always' }],
    'max-depth': ['off', 4],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'off',
      { max: 300, skipBlankLines: true, skipComments: true },
    ],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements-per-line': ['off', { max: 1 }],
    'max-statements': ['off', 10],
    'multiline-ternary': ['off', 'never'],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-alert': 'warn',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-continue': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-eq-null': 'off',
    'no-extra-semi': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-lonely-if': 'error',
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-unexpected-multiline': 'off',
    'no-negated-condition': 'off',
    'no-param-reassign': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-properties': ['error'].concat(restrictedProperties),
    'no-restricted-syntax': ['error'].concat(restrictedSyntax),
    'no-script-url': 'error',
    'no-spaced-func': 'error',
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-warning-comments': [
      'off',
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed', { unnecessary: false }],
    radix: 'error',
    'require-await': 'off',
    'vars-on-top': 'error',

    'import/no-unresolved': [
      'error',
      { caseSensitive: true, commonjs: true, amd: true },
    ],

    'standard/array-bracket-even-spacing': 'off',
    'standard/computed-property-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
  },
};
