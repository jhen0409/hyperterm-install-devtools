const { BrowserWindow } = require('electron')
const installer = require('electron-devtools-installer')

const notify = (title, body) => {
  const win = BrowserWindow.getAllWindows()[0];
  if (win) {
    win.webContents.executeJavaScript(`
      new Notification('${title}', {
        body: '${body}'
      })
    `)
  }
}

const install = (extensions, forceDownload, index = 0) => {
  let id = extensions[index]
  if (installer[id]) id = installer[id]
  if (!extensions[index]) return

  const next = () => install(extensions, forceDownload, index + 1)

  installer.default(id, forceDownload)
    .then(next)
    .catch(err => {
      notify('Install extension', err)
      next()
    })
}

exports.onApp = app => {
  const { installDevTools: config } = app.config.getConfig()
  if (!config || !Array.isArray(config.extensions)) return
  const { extensions, forceDownload } = config

  install(extensions, !!forceDownload)
}
