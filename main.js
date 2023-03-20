const {app, BrowserWindow, ipcMain, Menu, screen} = require('electron');
const path = require('path');

const menuTemplate = [
    {
        label: 'First Menu',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'toggleDevTools'
            }
        ]
    },
    {
        label: 'Second Menu',
        submenu: [
            {
                label: '111',
                accelerator: process.platform === 'darwin' ? 'Alt + Cmd + L' : 'Alt + Shift + L', // 快捷键
                click: () => {

                }
            },
            {
                label: '222',
                click: () => {

                }
            }
        ]
    },
    {
        label: 'help',
        click: async () => {
            const {shell} = require('electron')
            await shell.openExternal('https://electronjs.org')
        }
    }
]

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu) //自定义菜单
/*
* 创建窗口
* */
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/js' ,'preload.js')
        },
        icon: '/public/icons/icon.ico',
        hasShadow: true,
        center: true,
        show: true,
        backgroundColor: 'green'
    })

    ipcMain.handle('ping', () => {
        return `hello, this is a message`
    })
    ipcMain.handle('getDevice', () => screen.getAllDisplays())

    //加载远程地址
    // win.loadURL('https://www.baidu.com').then(r => {}).catch(e => {})
    //加载本地文件
    win.loadFile(path.resolve(__dirname, './src/views/index.html')).then((resolve) => {
        console.log('read success')
    }).catch(e => {
        console.log('error', e)
    })
}

app.whenReady().then(() => {

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
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
