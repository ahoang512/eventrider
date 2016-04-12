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


};
