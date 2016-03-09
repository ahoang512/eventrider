var RequestPage = React.createClass({
  mixins : [ReactRouter.History],
  render : function () {
    return (
      <div id="requestContainer">
        <div className="formContainer">
          <form>
          <h1>Fill out the details of the event below</h1>
            <input placeholder="Hello"></input>
            <input placeholder="Hello"></input>
            <input placeholder="Hello"></input>
            <input placeholder="Hello"></input>
          </form>
        </div>
      </div>
    );
  }
});
