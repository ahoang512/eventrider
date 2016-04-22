EventPage = React.createClass({
  //this.props.params.id
  getInitialState : function () {
    return ({
      eve : {},
      rides : []
    })
  },

  _onChange : function () {
    this.setState({
      eve : EventStore.selected(),
      rides : RideStore.all()
    })
  },

  componentWillMount : function () {
    EventUtil.fetchEvent(this.props.params.id);
    RideUtil.fetchRides(this.props.params.id);
  },

  componentDidMount : function () {
      EventStore.addChangeListener(this._onChange);
      RideStore.addChangeListener(this._onChange)
  },
  componentWillUnmount : function () {
      EventStore.removeChangeListener(this._onChange);
      RideStore.removeChangeListener(this._onChange);
  },
  render : function () {
    var eve = this.state.eve;
    var src = eve.image_url;
    var name = eve.name;
    var rides = this.state.rides;

    var rideTabs = rides.map(function(ride) {
      return (
        <li className="rideTab" key={ride.id}>
          {ride.seats}
        </li>
      )
    });

    var EventBanner = (
      <div className="banner">
        <div className="name">{name}</div>
        <span>{eve.date}</span>
        <span>{eve.location}</span>
        <img src={src}/>
      </div>
    );

    var RidesList = (
      <div className="ridesContainer">
        <h1>Available Rides</h1>
        <ul>
        {rideTabs}
        </ul>
      </div>
    );

    return(
      <div id = "eventPage">
        <div className="navBackground"></div>
        {EventBanner}
        {RidesList}
      </div>
    )
  }


});
