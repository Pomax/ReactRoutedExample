// shim nodejs so it can load .jsx files
require(`babel-core/register`);
var reactRouted = require('./react-routed.jsx');

// and a simple server
var express = require('express');
var app = express();
var PORT = 8080;

// our app, but then generated on-the-fly instead of as bundle
app.use(reactRouted);

// static file fallback
app.use(express.static(__dirname + '/public'));

// make it happen.
app.listen(PORT, () => console.log('Example app listening on port %d', PORT));
