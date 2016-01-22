window.fbAsyncInit = function() {
  FB.init({
    appId      : '1047250635331130',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  this.getID();
}.bind(this);

window.UserUtil = {
  getCurrentUserId : function () {
    FB.api('/me', function(response) {
      UserActions.receiveCurrentUser();
    }.bind(this));
  }
};
