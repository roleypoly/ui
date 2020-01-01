require('dotenv').config({ silent: true });

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...require('./hack/webpack-aliases'),
    };

    return config;
  },
  publicRuntimeConfig: {
    platformUrl: process.env.PLATFORM_SVC_URL || 'https://roleypoly.local:5066',
  },
};
