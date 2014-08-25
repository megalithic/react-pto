/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var API = require('../utils/api');
var _ = require("underscore");

var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      query: {
        text: ""
      }
    };
  },

  queryText: function(q) {
    return _.isUndefined(q) ? this.refs.queryText.getDOMNode().value : q;
  },

  handleSubmit: function(evt) {
    var queryText = this.queryText(evt.target.value);
    this.setState({query: { text: queryText }}, function() {
      API.mock.search({query: { text: this.state.query.text }}, function(res) {
        this.props.updateResults(res);
      }.bind(this));
    });
  },

  render: function() {
    return (
      <div className="search-box">
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend><i className="fa fa-exclamation-triangle"></i> <em>Queries entered below will not be BRS parsed.</em></legend>
            <div className="pure-g">
              <div className="pure-u-md-4-5">
                <input ref="queryText" className="queryText pure-input-1" type="text" placeholder="Enter a search query.." required="true" />
              </div>
              <div className="pure-u-md-1-5">
                <button type="submit" className="pure-button pure-input-1 pure-button-primary">Search</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;
