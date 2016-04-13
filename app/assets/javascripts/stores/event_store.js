(function(root) {
  var CHANGE_EVENT = "events_changed";

  var _events = [];
  var _selected = {};

  var resetEvents = function (events) {
    _events = events;
  };

  var resetSelected = function (eve){
    _selected = eve;
  };

  root.EventStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _events.slice();
    },

    selected : function () {
      return _selected;
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
        case EventConstants.EVENT_RECEIVED:
          resetSelected(action.eve);
          root.EventStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
