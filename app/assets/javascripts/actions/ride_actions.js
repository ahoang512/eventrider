RideActions = {
  receiveRides : function (rides){
    AppDispatcher.dispatch({
      actionType: RideConstants.RIDES_RECEIVED,
      rides: rides
    });
  }
};
