(function(root) {
  var CHANGE_EVENT = "user_changed";


  root.UserStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId : AppDispatcher.register(function(action){
      switch (action.actionType){

      }
    })
  });

})(this);
