window.UserUtil = {
  getCurrentUser : function () {
    FB.api('/me', function(response) {
      //Object {name: "Anthony Hoang", id: "10153429560556872"}
      UserActions.receiveCurrentUser(response);
    }.bind(this));
  }.bind(this),




};
