/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var _ = require("underscore");
var SearchResult = require("./search-result");

var SearchResults = React.createClass({
  getInitialState: function() {
    return ({ active: false });
  },

  handleKeyPress: function(evt) {
    if(this.isNavigationKey(evt.which)) {
    }
  },

  isNavigationKey: function(keyCode) {
    console.debug("key pressed", keyCode);
    return true;
  },

  componentDidMount: function() {
    window.addEventListener('keypress', this.handleKeyPress);
  },

  componentWillUnmount: function() {
    window.removeEventListener('keypress', this.handleKeyPress);
  },

  showResultsMessage: function() {
    var message = "";
    if(_.isArray(this.props.valueLink.value) && this.props.valueLink.value.length === 0) {
      message = "No results found.";
    } else if(_.isArray(this.props.valueLink.value) && this.props.valueLink.value.length > 0) {
      message = "Found " + this.props.valueLink.value.length + " results.";
    }
    return message;
  },

  searchResults: function() {
    return _.isArray(this.props.valueLink.value) ? this.props.valueLink.value : [];
  },

  render: function() {
    var results = this.searchResults().map(function(r, i) {
      return (<SearchResult result={r} />);
    });

    return (
      <div ref="searchResults" className="search-results">
        <strong>{this.showResultsMessage()}</strong>
        {results}
      </div>
    );
  }
});

module.exports = SearchResults;
