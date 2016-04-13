EventActions = {
  receiveEvents : function (events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events : events
    });
  },

  receiveEvent : function (eve) {
    AppDispatcher.dispatch ({
      actionType: EventConstants.EVENT_RECEIVED,
      eve : eve
    });
  }
};
