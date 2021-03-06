const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'enzyme',
    setupFilesAfterEnv: ['jest-enzyme', 'jest-styled-components'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/hack/tsconfig.test.json',
        },
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
};
