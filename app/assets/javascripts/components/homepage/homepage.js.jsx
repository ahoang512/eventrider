var Homepage = React.createClass({

  _topClick : function () {
    $('body').scrollTo('#homeMiddle', 1000);
  },

  render : function () {
    return(
      <div id="homepage">
        <div className="homeTop" onClick={this._topClick}>
          <JumboTron/>
        </div>
        <HomeMiddle/>
        <Footer/>
      </div>
    )
  }
});
