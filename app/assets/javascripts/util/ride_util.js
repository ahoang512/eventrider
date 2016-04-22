window.RideUtil = {
  fetchRides : function (id){
    var event_id = {
      event_id : id
    };
    $.ajax({
      url: "/api/rides/",
      type: "GET",
      data : event_id,
      success : function(rides) {
        RideActions.receiveRides(rides);
      }
    });
  }
};
