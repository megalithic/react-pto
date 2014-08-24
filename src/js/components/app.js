/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var AuthStore = require('../stores/AuthStore');
var AuthActionCreators = require('../actions/AuthActionCreators');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

function getStateFromStores() {
  return {
    auth: AuthStore.get()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AuthStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  signIn: function() {
    AuthActionCreators.signIn();
  },

  logout: function() {
    AuthActionCreators.logout();
  },

  render: function () {
    var klass = 'container seed';
    if (this.state.auth.authenticated) {
      klass += ' seed--authenticated';
    }
    return (
      <div className={klass}>
        <header className="header">
          <h1>MINI EST</h1>
          <nav className="pure-menu pure-menu-open pure-menu-horizontal">
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </nav>
        </header>

        <section className="content">
          {this.props.activeRouteHandler()}
        </section>
      </div>
    );
  }
});

module.exports = App;
