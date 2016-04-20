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
    EventStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    UserStore.removeChangeListener(this._onChange);
    EventStore.removeChangeListener(this._onChange);
  },

  _onChange : function () {
    this.setState({
      events : EventStore.all(),
      user : UserStore.user()
    });
  },



  render : function() {
    var user = this.state.user;
    var events = this.state.events;
    var evnts = [];
    if (user !== "" && events.length === 0){
      EventUtil.getUserEvents(user.id);
    }

    if (events.length !== 0){
      evnts = events.map(function(evt){
        return (
          <div>
            {evt.name}
          </div>
        )
      });
    }

    return (
      <div className = "events">
        <h1>Your Events</h1>
        <ul>
          {evnts}
        </ul>
      </div>
    );
  }
});
