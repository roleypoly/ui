const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    configFile: __dirname + '/../hack/tsconfig.test.json',
                    transpileOnly: true,
                },
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            tsConfig: __dirname + '/../hack/tsconfig.test.json',
        })
    );
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = require('../hack/webpack-aliases');
    return {
        ...config,
        node: {
            fs: 'empty',
        },
    };
};
