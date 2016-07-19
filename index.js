const installer = require('electron-devtools-installer')

const install = (extensions, forceDownload, index = 0) => {
  let id = extensions[index]
  if (installer[id]) id = installer[id]
  if (!extensions[index]) return

  installer.default(id, forceDownload)
    .then(() => install(extensions, forceDownload, index + 1))
    .catch(() => install(extensions, forceDownload, index + 1))
}

exports.onApp = app => {
  const { installDevTools: config } = app.config.getConfig()
  if (!config || !Array.isArray(config.extensions)) return
  const { extensions, forceDownload } = config

  install(extensions, !!forceDownload)
}
