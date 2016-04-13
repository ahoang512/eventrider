window.EventUtil = {
  getUserEvents : function (id) {
  },

  fetchFeaturedEvents : function () {
    $.ajax({
      url : "/api/events/featured",
      type: "GET",
      success : function (events) {
        EventActions.receiveEvents(events);
      }
    });
  },

  fetchEvent : function (id) {
    $.ajax({
      url: "/api/events/" + id,
      type: "GET",
      success : function (eve){
        EventActions.receiveEvent(eve);
      }
    });
  }


};
