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
    var src = this.state.eve.image_url;
    if (src=== 'undefined'){
      src = "";
    }


    var EventBanner = (
      <div><img src={src}/></div>
    );

    return(
      <div id = "eventPage">
        <div className="navBackground"></div>
        {EventBanner}
      </div>
    )
  }


});
