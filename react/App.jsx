/**
 * This is our app-as-bundle. Someone will have to write some kind of index.html
 * or whatever in order for this to get loaded into a page. It won't magically
 * set up a page, but it WILL magically do all the React things we need.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Router = ReactRouter.Router;

// We want all our content to be wrapped by a <Page/> component,
// so we get the route generating function, and then tell it to
// use Page.jsx as root, through which everything else gets
// generated:
var Page = require('./components/Page.jsx');
var routes = require('./routes/routes.jsx')(Page);

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('app'));
