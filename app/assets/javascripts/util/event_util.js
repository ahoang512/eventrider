window.EventUtil = {
  getUserEvents : function (id) {
    console.log('/' + id + '/events');
    FB.api('/' + id + '/events', function(response) {
      EventActions.receiveEvents(response.data);
      console.log(response.data);
    }.bind(this));
  }.bind(this)
};
