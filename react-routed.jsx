// Boilerplate requirements
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var RouterContext = ReactRouter.RouterContext;

// The all important route information
var routes = require('./react/routes/routes.jsx');

// We'll use this for static markup generation
var HTML = require('./react/components/HTML.jsx');

module.exports = function(req, res, next) {
  var location = req.url;

  // This is essentially a callback lookup. If the requested URL is a known
  // URL based on the routing map as defined in routes.jsx, then this will
  // lead to render properties that can be used to generate page components.
  ReactRouter.match({ routes, location }, (error, redirectLocation, renderProps) => {
    // obviously, we need an error handler.
    if (error) { res.status(500).send(error.message) }

    // React router lets you specify redirects. If we had any, we literally
    // just tell our server that we need to look up a different URL.
    else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    // This is the most interesting part: we have content that React can render.
    else if (renderProps) {
      // renderToString() generates React-properties-enriched HTML that a
      // React app can be loaded into.
      var reactHTML = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);

      // We then wrap this "active" HTML code with a "passive" HTML wrapper,
      // so that we can serve pages that look right, but still end with a <script>
      // load instruction that sees the app bundle trying to hook into the
      // "active" HTML part of the page.
      var htmlWrapper = ReactDOMServer.renderToStaticMarkup(<HTML reactHTML={reactHTML} />);

      // And to be good citizens of the web, we need a doctype, which React
      // cannot generate for us because exclamation points are funny.
      var doctype = "<!doctype html>";

      // Finally, send a full HTML document over to the client
      res.status(200).type('text/html').send(doctype + htmlWrapper);
    }

    // of course if this didn't have an error, nor a known redirect,
    // and it didn't find any render properties with which to render
    // a (set of) React component(s), we should fall through to whatever
    // else our express server can try to do to serve up content.
    else { next(); }
  });
};
