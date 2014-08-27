/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var _ = require("underscore");
var SearchResult = require("./search-result");

var SearchResults = React.createClass({
  allowedNavigationKeys: [
    106, //j
    107, //k
    13, //enter
  ],

  getInitialState: function() {
    return ({ active: false });
  },

  handleKeyPress: function(evt) {
    if(this.isNavigationKey(evt.which)) {
    }
  },

  isNavigationKey: function(keyCode) {
    var keyCodePresent = _.contains(this.allowedNavigationKeys, keyCode);
    return keyCodePresent;
  },

  componentDidMount: function() {
    var searchResultsNode = this.getDOMNode();
    window.addEventListener('keypress', this.handleKeyPress);
    searchResultsNode.focus();
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
