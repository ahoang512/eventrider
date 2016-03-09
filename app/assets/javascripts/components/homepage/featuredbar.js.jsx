var FeaturedBar = React.createClass({
  mixins : [ReactRouter.History],
  _request : function () {
    this.history.pushState({}, "request");
  },
  render : function () {
    return (
      <div id="featuredBar">
        <div className="prompt">Featured Shows</div>
        <Featured/>
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
  render : function () {
    return (
      <div className="featured">
          <div ></div>
          <div ></div>
      </div>
    );
  }
});
