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
    var events = []
    if (this.props.events.length !== 0){
      var events = this.props.events.map(function(eve){
        return (<FeaturedTile event={eve}/>);
      });
      // event1 = this.props.events[0].image_url;
      // event2 = this.props.events[1].image_url;
    }

    return (
      <div className="featured">
          {events}
      </div>
    );
  }
});

FeaturedTile = React.createClass({
  // this.props.event
  render : function () {
    return (
      <div className= "tile">
        <img src={this.props.event.image_url}/>
        <div className="date">{this.props.event.date}</div>
      </div>
    )
  }
});
