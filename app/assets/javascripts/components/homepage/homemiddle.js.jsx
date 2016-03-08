var FeaturedBar = React.createClass({
  render : function () {
    return (
      <div id="featuredBar">
        <div className="prompt">Featured Shows</div>
        <Featured/>
        <div className="requestPrompt">
          <div>Don't see your event?</div>
          <div>
            <div id="requestButton">Suggest an Event</div>
          </div>
        </div>
      </div>
    );
  }
});

var Featured = React.createClass({
  render : function () {
    return (
      <div className="featured">
          <div ></div>
          <div ></div>
      </div>
    );
  }
});
