(function(root) {
  var CHANGE_EVENT = "events_changed";


  root.EventStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener : function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType) {

      }
    })
  });
})(this);
