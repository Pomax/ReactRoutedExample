var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// Bundle entry point
var entry = [
  './react/App.jsx'
];

// Bundle output
var output = {
  path: path.join(__dirname, 'public', 'js'),
  filename: 'bundle.js',
  publicPath: '/js/',
};

// Dev: hot reload etc. Prod: compress our bundle.
var plugins = [];
if(process.argv.indexOf("--prod") === -1) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else if(process.argv.indexOf("--prod") > -1) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

// And the final config that webpack will read in.
module.exports = {
  entry:  entry,
  target: "web",
  output: output,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      }
    ]
  },
  eslint: {
    configFile: __dirname + '/.eslintrc'
  },
  plugins: plugins
};
