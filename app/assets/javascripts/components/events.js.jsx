var Events = React.createClass({
  mixins : [ReactRouter.History],
  //this.props.userID

  getInitialState : function(){
    return ({
      id : '',
      events : [],

    });
  },

  componentDidMount : function () {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1047250635331130',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
      });

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      this.getID();
    }.bind(this);
  },

  
  getID : function () {
    FB.api('/me', function(response) {
      this.setState({
        id : response.id
      });
    }.bind(this));

  },


  render : function() {
    return (
      <div className = "events">
        <h1>Your Events</h1>
      </div>
    );
  }
});
