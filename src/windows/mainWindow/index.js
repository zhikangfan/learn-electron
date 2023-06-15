const {app, BrowserWindow, ipcMain, Menu, screen, Notification} = require('electron');
const path = require('path');
const {createSettingWindow} = require("../settingWindow");


function createMainWindow() {

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
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
        transparent: true
        // backgroundColor: 'green'
    })

    ipcMain.handle('main_ping', () => {
        return `this is a message`
    })
    ipcMain.handle('main_getDevice', () => screen.getAllDisplays())

    ipcMain.handle('main_show1', () => {
        let notification = new Notification({
            title: 'title',
            subtitle: 'subtitle',
            body: 'success body'
        })
        notification.show();
    })

    ipcMain.handle('main_close', () => mainWindow.close())

    ipcMain.handle('main_maximize', () => mainWindow.maximize());
    ipcMain.handle('main_minimize', () => mainWindow.minimize());
    ipcMain.handle('main_unmaximize', () => mainWindow.unmaximize());
    ipcMain.handle('main_showSetting', () => {
        createSettingWindow({parent: mainWindow})
    })
//加载本地文件
    mainWindow.loadFile(path.resolve(__dirname, '../../views/main/index.html')).then((resolve) => {
        console.log('read success')
    }).catch(e => {
        console.log('error', e)
    })

    return mainWindow;
}

module.exports = {createMainWindow};