(function(root) {
  var CHANGE_EVENT = "events_changed";

  var _events = [];

  var resetEvents = function (events) {
    _events = events;
  };

  var filterFutureEvents = function (event) {
    var today = new Date().toJSON().slice(0,10);
  };

  root.EventStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _events.slice();
    },

    addChangeListener : function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener : function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(action){
      switch (action.actionType) {
        case EventConstants.EVENTS_RECEIVED:
          resetEvents(action.events);
          root.EventStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
