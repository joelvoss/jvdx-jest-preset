const config = {
	testEnvironment: 'node',
	testEnvironmentOptions: {
		url: 'http://localhost'
	},
	watchPlugins: [
		require.resolve('jest-watch-typeahead/filename'),
		require.resolve('jest-watch-typeahead/testname'),
	],
	transform: {
		'^.+\\.jsx?$': require.resolve('babel-jest'),
		'^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
	}
}

module.exports = config;
