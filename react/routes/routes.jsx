var React = require(`react`);

var ReactRouter = require(`react-router`);
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

module.exports = function(Root) {
  return (
    <Route path='/' component={Root}>
      <IndexRoute component={require(`../components/Data.jsx`)} />

      <Route path='data' component={require(`../components/Data.jsx`)} />

      <Route path='section1' component={require(`../pages/section1.jsx`)}>
        <Route path='details' component={require(`../pages/section-details.jsx`)} />
      </Route>

      <Route path='section2' component={require(`../pages/section2.jsx`)}/>
      <Route path='section3' component={require(`../pages/section3.jsx`)}/>
      <Route path='section4' component={require(`../pages/section4.jsx`)}/>
      <Route path='section5' component={require(`../pages/section5.jsx`)}/>
      <Route path='section6' component={require(`../pages/section6.jsx`)}/>
      <Route path='section7' component={require(`../pages/section7.jsx`)}/>
      <Route path='section8' component={require(`../pages/section8.jsx`)}/>
      <Route path='section9' component={require(`../pages/section9.jsx`)}/>
    </Route>
  );
};
