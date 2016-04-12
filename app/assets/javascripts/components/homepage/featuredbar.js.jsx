var FeaturedBar = React.createClass({
  mixins : [ReactRouter.History],

  getInitialState : function () {
    return ({
      events : []
    })
  },
  _request : function () {
    this.history.pushState({}, "request");
  },

  _onChange : function () {
    this.setState({
      events : EventStore.all()
    });
  },

  componentDidMount : function () {
    EventStore.addChangeListener(this._onChange);
  },
  componentWillUnmount : function(){
    EventStore.removeChangeListener(this._onChange);
  },

  render : function () {
    return (
      <div id="featuredBar">
        <div className="prompt">Featured Shows</div>
        <Featured events = {this.state.events}/>
        <div className="requestPrompt">
          <div>Don't see your event?</div>
          <div>
            <div id="requestButton" onClick = {this._request}>
              Suggest an Event
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Featured = React.createClass({
  //this.props.events
  render : function () {
    var event1 = this.props.events[0];
    var event2 = this.props.events[1];
    var loaded = true;
    if (this.props.events.length == 0){
      loaded = false;
    }

    if (loaded){
      return (
        <div className="featured">
          <div className= "tileContainer">
            <div><img src={event1.image_url}/></div>
            <div><img src={event2.image_url}/></div>
          <div>
        </div>
      );
    }else{
      return(
        <div></div>
      )
    }
  }
});
