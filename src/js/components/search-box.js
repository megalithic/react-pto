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

  handleSubmit: function(evt) {
    var queryText = "";
    if(_.isUndefined(evt.target.value)) {
      queryText = this.refs.queryText.getDOMNode().value;
    } else {
      queryText = evt.target.value;
    }

    this.setState({query: { text: queryText }}, function() {
      API.mock.search({query: { text: this.state.query.text }}, function(res) {
        this.props.updateResults(res);
      }.bind(this));
    });
  },

  componentDidMount: function() { },

  render: function() {
    return (
      <form className="pure-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend><i className="fa fa-exclamation-triangle"></i> <em>Queries entered below will not be BRS parsed.</em></legend>
          <div className="pure-g">
            <div className="pure-u-md-4-5">
              <input ref="queryText" className="pure-input-1" type="text" placeholder="Enter a search query.." required="true" />
            </div>
            <div className="pure-u-md-1-5">
              <button type="submit" className="pure-button pure-input-1 pure-button-primary">Search</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = SearchBox;
