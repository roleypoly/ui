module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'enzyme',
	setupFilesAfterEnv: 'jest-enzyme',
	snapshotSerializers: ['enzyme-to-json/serializer'],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/hack/tsconfig.test.json',
		},
	},
}
