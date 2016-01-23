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
    if (user === "") {
      EventUtil.getUserEvents();
    }

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
    debugger
    return (
      <div className = "events">
        <h1>Your Events</h1>
      </div>
    );
  }
});
