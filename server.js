var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
//get env data
var args = require('minimist')(process.argv.slice(2));
// Set the correct environment
var env;
if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

var app = new (require('express'))()
var port = 3000

var config = require('./webpack/config.' + env + '.js')
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  if ( env != 'prod' )
    res.sendFile(__dirname + '/src/index.html')
  else
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
