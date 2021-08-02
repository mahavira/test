const CracoAntDesignPlugin = require('craco-antd');
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#3DB17A',
          // 'link-color': '#1DA57A',
          'border-radius-base': '5px',
          'border-color-base': 'transparent'
        },
      },
    },
  ],
};
