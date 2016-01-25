var Events = React.createClass({
  mixins : [ReactRouter.History],
  //this.props.userID

  getInitialState : function(){
    return ({
      user : "",
      events : [],

    });
  },

  componentDidMount : function () {
    UserUtil.getCurrentUser();
    EventStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    UserStore.removeChangeListener(this._onChange);
    EventStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    var user = UserStore.user();

    this.setState({
      events : EventStore.all(),
      user : user
    });
  },



  render : function() {
    var user = this.state.user;
    if (user !== "" && this.state.events.length === 0){
      EventUtil.getUserEvents(user.id);
    }
    for (var i = 0; i < this.state.events.length; i++) {
      console.log(this.state.events[i].start_time);
    }
    return (
      <div className = "events">
        <h1>Your Events</h1>
      </div>
    );
  }
});
