module.exports = {
  packagerConfig: {
    icon: '/public/icons/icon' //配置应用图标, 不需要文件拓展名 mac: .icns(512*512), windows: .ico(256*256), linux: .png(512*512)
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      // config: {
      //   iconUrl: '', //安装程序应用图标
      //   setupIcon: '', //升级应用程序图标
      // },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: '/public/icons/icon.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        icon: '/public/icons/icon.ico'
      },
    },
  ],
};
