# hyperterm-install-devtools

> Install DevTools extension via Chrome Web Store on [HyperTerm](https://hyperterm.org), used [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

![Screenshot](https://cloud.githubusercontent.com/assets/3001525/16935410/cbc9aa9e-4d91-11e6-9d59-61317b6644d1.png)

> Use [React Developer Tools](react developer tools not working) on web page (Open DevTools by [hyperterm-open-devtools](https://www.npmjs.com/package/hyperterm-open-devtools))

## Install

Add `hyperterm-install-devtools` to the plugins list in your `~/.hyperterm.js` config file.

## Config of install extensions

You can set `installDevTools` in `~/.hyperterm.js` config file:

```
config: {
  ...
  installDevTools: {
    extensions: [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ],
    forceDownload: false
  }
}
```

You need restart app to apply the config.

See [`What extensions can I use`](https://github.com/GPMDP/electron-devtools-installer#what-extensions-can-i-use) for more information.

## License

[MIT](LICENSE.md)
