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
              '@layout-body-background':'#FFF',
              '@layout-header-background': '#f0f2f5',
              '@menu-bg':'none',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};