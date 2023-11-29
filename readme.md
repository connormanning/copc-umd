# copc-umd

A UMD generator for [copc.js](https://github.com/connormanning/copc.js), which
is distributed as an ES module.

### How to use
`npm run build` will generate `lib/index.js`.  Put this bundle in your scripts
directory and call it `copc.js`, and include it via `script` tag in your HTML.
The copc.js library will then be available on the window as the global `Copc`.
