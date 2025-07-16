module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source-map-loader warnings from Flowbite
      webpackConfig.ignoreWarnings = [
        { module: /node_modules\/flowbite/ },
      ];
      return webpackConfig;
    },
  },
};