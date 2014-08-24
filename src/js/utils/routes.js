/** @jsx React.DOM */
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

module.exports = (
  <Routes>
    <Route location="page" handler={require('../components/app')}>
      <Route name="search" path="/" handler={require('../components/search')} />
      <Route name="about" path="/about" handler={require('../components/about')} />
    </Route>
  </Routes>
);
