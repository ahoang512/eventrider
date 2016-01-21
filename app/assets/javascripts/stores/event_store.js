(function(root) {
  var CHANGE_EVENT = "events_changed";


  root.EventStore = $.extend({}, EventEmitter.prototype, {
    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType) {
      
      }
    })
  });
})(this);
