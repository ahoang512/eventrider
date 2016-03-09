$(document).ready((function(){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var root = document.getElementById('root');
  var App = React.createClass({
    render: function(){
      return (
          <div className="app">
            <NavBar/>
            {this.props.children}
            <Footer/>
          </div>
      );
    }
  });

  React.render((
      <Router>
        <Route path="/" component= {App}>
        <IndexRoute component={Homepage}/>
          <Route path="events" component={Events}/>
          <Route path="loginPage" component={Login}/>
        </Route>
      </Router>
    ), root);
}));
