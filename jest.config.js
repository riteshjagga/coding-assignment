module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  roots: [
    '<rootDir>/src' // This tells Jest to look in the src directory.
  ], 
  setupFilesAfterEnv: [
    '<rootDir>/setup/setupTests.ts'
  ],
}
