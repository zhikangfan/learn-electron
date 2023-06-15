const {app, BrowserWindow, ipcMain, Menu, screen, Notification} = require('electron');
const path = require('path');



function createSettingWindow({parent}) {

    const settingWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            devTools: true,
            preload: path.join(__dirname,'preload.js')
        },
        icon: '/public/icons/icon.ico',
        hasShadow: true,
        center: true,
        show: true,
        frame: false,
        resizable: false,
        movable: true,
        skipTaskbar: false,
        transparent: true,
        parent: parent
        // backgroundColor: 'green'
    })

    ipcMain.handle('setting_ping', () => {
        return `this is a message`
    })
    ipcMain.handle('setting_getDevice', () => screen.getAllDisplays())

    ipcMain.handle('setting_show1', () => {
        let notification = new Notification({
            title: 'setting',
            subtitle: 'subtitle',
            body: 'success body'
        })
        notification.show();
    })

    ipcMain.handle('setting_close', () => settingWindow.close())

    // 窗口关闭移出事件
    settingWindow.on('close', () => {
        ipcMain.removeHandler('setting_ping');
        ipcMain.removeHandler('setting_getDevice');
        ipcMain.removeHandler('setting_show1');
        ipcMain.removeHandler('setting_close');
    })




//加载远程地址
// win.loadURL('https://www.baidu.com').then(r => {}).catch(e => {})
//加载本地文件
    settingWindow.loadFile(path.resolve(__dirname, '../../views/setting/index.html')).then((resolve) => {
        console.log('read success')
    }).catch(e => {
        console.log('error', e)
    })

    return settingWindow;
}

module.exports = {
    createSettingWindow
}