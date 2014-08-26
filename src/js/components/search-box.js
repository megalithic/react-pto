/** @jsx React.DOM */

var React = require('react');
var API = require('../utils/api');
var _ = require("underscore");
var cs = React.addons.classSet;

var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      query: {
        text: ""
      },
      executing: false
    };
  },

  queryText: function(q) {
    return _.isUndefined(q) ? this.refs.queryText.getDOMNode().value : q;
  },

  handleSubmit: function(evt) {
    this.setState({executing: true});
    var queryText = this.queryText(evt.target.value);
    this.setState({query: { text: queryText }}, function() {
      API.mock.search({query: { text: this.state.query.text }}, function(res) {
        this.props.updateResults(res);
        this.setState({executing: false});
      }.bind(this));
    });
  },

  componentDidMount: function() {
    this.refs.queryText.getDOMNode().focus();
  },

  render: function() {
    var searchClass = cs({
      "fa": true,
      "fa-spinner fa-spin": this.state.executing,
      "fa-search": !this.state.executing,
    });
    return (
      <div className="search-box">
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend><i className="fa fa-exclamation-triangle"></i> <em>Queries entered below will not be BRS parsed.</em></legend>
            <div className="pure-g">
              <div className="pure-u-md-4-5">
                <input ref="queryText" className="queryText pure-input-1" type="text" placeholder="Enter a search query.." required />
              </div>
              <div className="pure-u-md-1-5">
                <button type="submit" className="pure-button pure-input-1 pure-button-primary" title="Execute Search"><i className={searchClass}></i></button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;
