(function(root) {
  var CHANGE_EVENT = "user_changed";

  var _user = "";
  var _loggedIn = false;

  var resetUser = function (user, logged){
    _user = user;
    _loggedIn = logged;
  };


  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user : function () {
      return _user;
    },

    loggedIn : function() {
      return _loggedIn;
    },
    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherId : AppDispatcher.register(function(action){
      switch (action.actionType){
        case UserConstants.CURRENT_USER_RECEIVED:
          resetUser(action.user, true);
          root.UserStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.CURRENT_USER_LOGOUT:
          resetUser({}, false);
          root.UserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
