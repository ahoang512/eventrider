var HomeMiddle = React.createClass({
  render : function () {
    return (
      <div id="homeMiddle">
        <div className="prompt">Featured Shows</div>
        <Featured/>
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
