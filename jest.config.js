module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      importHelpers: 'true',
    },
  },
  'moduleNameMapper': {
    '~/(.*)': '<rootDir>src/$1'
  }
}