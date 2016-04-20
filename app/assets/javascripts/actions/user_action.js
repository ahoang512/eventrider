
UserActions = {
  receiveCurrentUser : function (user) {
    AppDispatcher.dispatch({
      actionType : UserConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  },

  suggestEvent : function (params){
    UserUtil.suggestEvent(params);
  },

  login : function () {
    FB.login(function(response){
      checkExistingUser();
      checkLoginState(response);
    },
      // {scope : 'public_profile,email,user_events'}
      {scope : 'email'}
    );
  },

  logout : function (){
    FB.logout(function(response) {
      AppDispatcher.dispatch({
        actionType : UserConstants.CURRENT_USER_LOGOUT
      });
    });
  }



};

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

statusChangeCallback = function(response) {
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    // this.history.pushState({}, "events");
    // this.testAPI();
    this.history.pushState({}, "/");
    // this.setState({
    //   loggedIn : true
    // });
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
};

var checkExistingUser = function()  {
  FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    UserUtil.createUser(response);
  });
};

var checkLoginState = function(response) {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  }, true);
};

var statusChangeCallback = function(response) {

  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    //do something if needed
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
};
