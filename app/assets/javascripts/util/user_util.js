window.UserUtil = {
  getCurrentUser : function () {
    console.log("get");
    FB.api('/me', function(response) {
      //Object {name: "Anthony Hoang", id: "10153429560556872"}
      UserActions.receiveCurrentUser(response);
    }.bind(this));
  }.bind(this),

  connect : function (callback) {
    console.log("connect");
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

      callback();
    }.bind(this);

  }

};
