var NavBar = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function () {
    return (
      {loggedIn : false}
    );
  },

  componentDidMount : function () {
    this._mountFB();
  },

  _mountFB : function (){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1047250635331130',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
      });

      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  statusChangeCallback : function(response) {

    if (response.status === 'connected') {
      this.setState({
        loggedIn : true
      });
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  },


  _log : function (e){
    e.preventDefault();
    switch (e.target.textContent){
      case "Log Out":
        FB.logout(function(response) {
          this.setState({
            loggedIn : false
          });
        }.bind(this));
        break;
      case "Log In":
        this.history.pushState({}, "loginPage");
        break;
    }
  },

  _logo : function (e) {
    e.preventDefault();
    this.history.pushState({}, "/");
  },


  render : function () {
    this._mountFB();
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
