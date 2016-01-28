(function(root) {
  var CHANGE_EVENT = "events_changed";

  var _events = [];

  var resetEvents = function (events) {
    _events = events;
  };

  var filterFutureEvents = function (events) {
    var filtered = [];
    var today = new Date().toJSON().slice(0,10);
    // '2016-01-28'
    today = today.split('-');
    var todayYear = parseInt(today[0]);
    var todayMonth = parseInt(today[1]);
    var todayDay = parseInt(today[2]);

    for (var i = 0; i < events.length; i++) {
      var start_time = parseDate(events[i].start_time);
      var startYear = parseInt(start_time[0]);
      var startMonth = parseInt(start_time[1]);
      var startDay = parseInt(start_time[2]);

      if (startYear >= todayYear) {
        if (startMonth >= todayMonth){
          if (startDay >= todayDay){
            console.log("push");
            filtered.push(events[i]);
          }
        }
      }
    }
    debugger
    return filtered;

  };

  var parseDate = function (date) {
    return date.split('T')[0].split('-');
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
          filterFutureEvents(action.events);
          root.EventStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
