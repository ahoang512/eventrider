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
        <div className="prompt">Featured</div>
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
        return (<FeaturedTile event={eve} key={eve.id}/>);
      });
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
  mixins : [ReactRouter.History],


  _onClick : function () {
    var route = "events/" + this.props.event.id;
    var id = this.props.event.id;
    this.history.pushState({}, route);
  },

  render : function () {
    return (
      <div className= "tile" onClick={this._onClick}>
        <img src={this.props.event.image_url}/>
        <div className="date">{this.props.event.date}</div>
      </div>
    )
  }
});
