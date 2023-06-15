const {app, BrowserWindow, ipcMain, Menu, screen, Notification} = require('electron');

const {createMainWindow} = require('./src/windows/mainWindow/index');
const path = require('path');

app.whenReady().then(() => {
   createMainWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})
/*
* 关闭窗口
* */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit(); // 退出程序
    }
})
