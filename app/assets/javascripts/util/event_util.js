window.EventUtil = {
  getUserEvents : function (id) {
    console.log('/' + id + '/events');
    FB.api('/' + id + '/events', function(response) {
      console.log(response);
    }.bind(this));
  }.bind(this)
};
