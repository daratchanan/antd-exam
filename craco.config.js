const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#095cd9',
              '@layout-header-background': '#9de4ff',
              '@menu-bg':'none'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};