module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...require('./hack/webpack-aliases'),
    };

    return config;
  },
};
