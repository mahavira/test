const CracoAntDesignPlugin = require('craco-antd');
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // '@primary-color': '#61dafb',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '4px',
        },
      },
    },
  ],
};
