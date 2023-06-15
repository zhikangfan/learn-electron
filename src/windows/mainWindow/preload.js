/*
* 通过 contextBridge 接口定义 全局对象。
* */
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('mainView', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('main_ping'),
    getDevice: () => ipcRenderer.invoke('main_getDevice'),
    show1: () => ipcRenderer.invoke('main_show1'),
    close: () => ipcRenderer.invoke('main_close'),
    maximize: () => ipcRenderer.invoke('main_maximize'),
    minimize: () => ipcRenderer.invoke('main_minimize'),
    unmaximize: () => ipcRenderer.invoke('main_unmaximize'),
    showSetting: () => ipcRenderer.invoke('main_showSetting')
    // 能暴露的不仅仅是函数，我们还可以暴露变量
})