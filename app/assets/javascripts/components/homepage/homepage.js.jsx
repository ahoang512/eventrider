var Homepage = React.createClass({

  render : function () {
    return(
      <div id="homepage">
        <div className="homeTop" >
          <JumboTron/>
        </div>
        <HomeMiddle/>
        <Footer/>
      </div>
    )
  }
});
