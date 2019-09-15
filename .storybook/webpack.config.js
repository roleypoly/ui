const path = require('path')
const src = (...subdir) => {
  return path.join(__dirname, '..', ...subdir)
}

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          useCache: true,
          configFileName: __dirname + '/../hack/tsconfig.test.json',
        },
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    atoms: src(`atoms`),
    molecules: src(`molecules`),
    organisms: src(`organisms`),
    templates: src(`templates`),
    pages: src(`pages`),
    hack: src(`hack`),
  }
  return {
    ...config,
    node: {
      fs: 'empty',
    },
  }
}
