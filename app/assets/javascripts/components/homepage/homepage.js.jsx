var Homepage = React.createClass({


  render : function () {
    return(
      <div id="homepage">
        <div className="homeTop" onClick={this._topClick}>
          <JumboTron/>
        </div>
        <FeaturedBar/>
        <Footer/>
      </div>
    )
  }
});
