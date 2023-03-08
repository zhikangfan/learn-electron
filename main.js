const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    //加载远程地址
    win.loadURL('https://www.baidu.com').then(r => {}).catch(e => {})
    //加载本地文件
    // win.loadFile(path.resolve(__dirname, './src/views/index.html')).then((resolve) => {
    //     console.log('read success')
    // }).catch(e => {
    //     console.log('error', e)
    // })
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})