EventPage = React.createClass({
  //this.props.params.id
  getInitialState : function () {
    return ({
      eve : {}
    })
  },

  _onChange : function () {
    this.setState({
      eve : EventStore.selected()
    })
  },

  componentWillMount : function () {
    EventUtil.fetchEvent(this.props.params.id);
  },

  componentDidMount : function () {
      EventStore.addChangeListener(this._onChange);
  },
  componentWillUnmountMount : function () {
      EventStore.removeChangeListener(this._onChange);
  },
  render : function () {
    var eve = this.state.eve;
    var src = eve.image_url;
    var name = eve.name;


    var EventBanner = (
      <div className="banner">
        <div className="name">{name}</div>
        <span>{eve.date}</span>
        <span>{eve.location}</span>
        <img src={src}/>
      </div>
    );

    return(
      <div id = "eventPage">
        <div className="navBackground"></div>
        {EventBanner}
      </div>
    )
  }


});
