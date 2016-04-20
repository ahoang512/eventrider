var Login = React.createClass({
  mixins : [ReactRouter.History],
  getInitialState : function(){
    return ({
      loggedIn : UserStore.loggedIn()
    });
  },

  componentDidMount : function (){
    if (this.state.loggedIn){
      this.history.pushState({},"/");
    }
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    if (UserStore.loggedIn()){
      this.history.pushState({},"/");
    }
  },

  handleClick : function (e) {
    UserActions.login();
  },

  render : function (){
    var loggedIn  = this.state.loggedIn;

    return (
      <div id = "loginContainer">
        <div className="logo">eventrider</div>
        <div className="prompt">Login with Facebook to setup a ride</div>
        <div className="loginButton" onClick={this.handleClick}>
          Log in with Facebook
        </div>
      </div>
    );
  },
});
