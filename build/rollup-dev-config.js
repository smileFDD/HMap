const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const { input, output } = require('./rollup-base-config')[0]

module.exports = Object.assign({
  plugins: [
    serve({
      open: true, // 是否打开浏览器
      contentBase: ['dist', 'example', 'docs'],
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: '127.0.0.1',
      port: 3333,
    }),
    livereload({
      watch: ['dist', 'example', 'docs']
    })
  ]
}, input, { output })

console.log(`examples: http://127.0.0.1:3333`)
