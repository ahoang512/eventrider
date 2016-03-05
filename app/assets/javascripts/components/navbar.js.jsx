var NavBar = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function () {
    return (
      {loggedIn : false}
    );
  },

  componentDidMount : function () {

  },

  _login : function (e){
    e.preventDefault();
    this.history.pushState({}, "loginPage");
  },

  _logo : function (e) {
    e.preventDefault();
    this.history.pushState({}, "/");
  },

  render : function () {
    return (
      <div className="navbar">
        <div className="clearfix">
          <div id="logo" onClick={this._logo}>
            eventrider
          </div>
          <div className="navLogin" onClick={this._login}>
            Log In
          </div>
        </div>
      </div>
    )
  }

});
