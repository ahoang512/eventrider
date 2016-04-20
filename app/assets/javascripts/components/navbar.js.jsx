var NavBar = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function () {
    return (
      {loggedIn : UserStore.loggedIn(),
          user  : UserStore.user()}
    );
  },

  componentDidMount : function () {
    UserStore.addChangeListener(this._onChange);
  },
  componentWillMount : function () {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({
      user : UserStore.user(),
      loggedIn : UserStore.loggedIn()
    })
  },






  _log : function (e){
    e.preventDefault();
    switch (e.target.textContent){
      case "Log Out":
        UserActions.logout();
        break;
      case "Log In":
        this.history.pushState({}, "login");
        break;
    }
  },

  _logo : function (e) {
    e.preventDefault();
    this.history.pushState({}, "/");
  },


  render : function () {
    // this._mountFB();
    var logged = this.state.loggedIn ? "Log Out" : "Log In";
    return (
      <div className="navbar">
        <div className="clearfix">
          <div id="logo" onClick={this._logo}>
            eventrider
          </div>
          <div className="navLogin" onClick={this._log}>
            {logged}
          </div>
        </div>
      </div>
    )
  }

});
