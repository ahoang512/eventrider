var NavBar = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function () {
    return (
      {loggedIn : false}
    );
  },

  componentDidMount : function () {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1047250635331130',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
      });

    //
    //   // Now that we've initialized the JavaScript SDK, we call
    //   // FB.getLoginStatus().  This function gets the state of the
    //   // person visiting this page and can return one of three states to
    //   // the callback you provide.  They can be:
    //   //
    //   // 1. Logged into your app ('connected')
    //   // 2. Logged into Facebook, but not your app ('not_authorized')
    //   // 3. Not logged into Facebook and can't tell if they are logged into
    //   //    your app or not.
    //   //
    //   // These three cases are handled in the callback function.
    //
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

    // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback : function(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      // this.history.pushState({}, "events");
      // this.testAPI();
      this.setState({
        loggedIn : true
      });
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML += 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML += 'Please log ' +
        'into Facebook.';
    }
  },
  checkLoginState : function(response) {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this), true);
  },


  _login : function (e) {
    FB.login(function(response){
      this.checkLoginState(response);
    }.bind(this),
      {scope : 'public_profile,email,user_events'}
    );
  },

  _onChange : function (e){

    switch (e.target.textContent){
    case  "Log In":
        this.history.pushState({}, "loginPage");
        break;
    }
  },

  render : function () {
    return (
      <div className="navbar">
        <div className="clearfix">
          <div id="logo">
            eventrider
          </div>
          <div className="navLogin" onClick={this._onChange}>
            Log In
          </div>
        </div>
      </div>
    )
  }

});
