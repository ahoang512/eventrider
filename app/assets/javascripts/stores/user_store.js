(function(root) {
  var CHANGE_EVENT = "user_changed";

  var _user = {};

  var resetUser = function (user){
    var names = user.name.split(" ");

    _user.id = user.id;
    _user.fullName = user.name;
    _user.firstName = names[0];
    _user.lastName = names[1];
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user : function () {
      return _user;
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
          debugger
          resetUser(action.user);
          root.UserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
