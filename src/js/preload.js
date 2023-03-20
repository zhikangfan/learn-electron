/*
* 通过 contextBridge 接口定义 全局对象。
* */
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    getDevice: () => ipcRenderer.invoke('getDevice')
    // 能暴露的不仅仅是函数，我们还可以暴露变量
})