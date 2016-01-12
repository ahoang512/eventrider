$(function(){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var root = document.getElementById('root');
  var App = React.createClass({
    render: function(){
      return (
          <div className="app">
          </div>
      );
    }
  });

  React.render((
      <Router>
        <Route path="/" component= {App}>
        </Route>
      </Router>
    ), root);
});
