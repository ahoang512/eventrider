EventActions = {
  receiveEvents : function (events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events : events
    });
  }
};
