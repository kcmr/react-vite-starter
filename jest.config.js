module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/src/infrastructure/tests/setup-tests.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
}
