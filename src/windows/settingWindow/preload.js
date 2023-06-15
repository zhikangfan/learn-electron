/*
* 通过 contextBridge 接口定义 全局对象。
* */
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('settingView', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('setting_ping'),
    getDevice: () => ipcRenderer.invoke('setting_getDevice'),
    show1: () => ipcRenderer.invoke('setting_show1'),
    close: () => ipcRenderer.invoke('setting_close')
})