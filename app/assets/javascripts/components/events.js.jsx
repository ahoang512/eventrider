var Events = React.createClass({
  mixins : [ReactRouter.History],
  //this.props.userID

  getInitialState : function(){
    return ({
      events : [],
      
    });
  },

  render : function() {
    return (
      <div className = "events">
        <h1>Your Events</h1>
      </div>
    );
  }
});
