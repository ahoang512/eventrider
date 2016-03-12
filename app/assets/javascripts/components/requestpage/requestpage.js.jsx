var RequestPage = React.createClass({
  mixins : [ReactRouter.History],
  getInitialState : function () {
    return ({
      name : "",
      place : "",
      date : ""
    });
  },

  _inputChange : function (e) {
    switch (e.target.id){
      case "name" :
        this.setState({
          name : e.target.value
        });
        break;
      case "place":
        this.setState({
          place : e.target.value
        });
        break;
      case "date":
        this.setState({
          date : e.target.value
        });
        break;
    }
  },

  _handleSubmit : function (){
    UserUtil.suggestEvent();
  },

  render : function () {
    return (
      <div id="requestContainer">
        <div className="formContainer">
          <form onSubmit={this._handleSubmit}>
            <h1>Can't find an event?</h1>
            <h2>Fill out the details of the event below</h2>
            <h3>We will review and update shortly</h3>
            <input placeholder="Event Name" onChange={this._inputChange}
              value={this.state.name}
              id="name"/>
            <input placeholder="Event Location" onChange={this._inputChange}
              value={this.state.place}
              id="place"/>
            <input placeholder="Event Date" onChange={this._inputChange}
              value={this.state.date}
              id="date"/>
            <button className="requestButton">Submit Request</button>
          </form>
        </div>
      </div>
    );
  }
});
