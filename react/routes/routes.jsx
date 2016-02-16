var React = require('react');

var ReactRouter = require('react-router');
var Route =  ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

module.exports = function(Root) {
  return (
    <Route path='/' component={Root}>
      <IndexRoute component={require('../components/List.jsx')} />
      <Route path='list' component={require('../components/List.jsx')} />
      <Route path='grid' component={require('../components/Grid.jsx')} />
      <Route path='cloud' component={require('../components/Cloud.jsx')} />
    </Route>
  );
};
