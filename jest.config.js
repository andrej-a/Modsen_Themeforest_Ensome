/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    testMatch: ['<rootDir>/test/**/*.test.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.{ts|tsx}?$': 'ts-jest',
        '^.+\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
