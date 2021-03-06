/** @jsx React.DOM */

var React = require('react');
var helpers = require("../utils/helpers");
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
    var key = evt.which;
    if(this.isNavigationKey(key)) {
      switch(key) {
        case 106:
          console.debug("key should be j/106", key);
          break;
        case 107:
          console.debug("key should be k/107", key);
          break;
        default:
          console.debug("default", key);
          break;
      }
    }
  },

  selectNextDocument: function(evt) {
  },

  selectPreviousDocument: function(evt) {
  },

  isNavigationKey: function(keyCode) {
    var keyCodePresent = this.allowedNavigationKeys.indexOf(keyCode) > -1;
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
    if(helpers.isString(this.props.valueLink.value)) {
      message = "";
    } else if(Array.isArray(this.searchResults()) && this.searchResults().length === 0) {
      message = "No results found.";
    } else if(Array.isArray(this.searchResults()) && this.searchResults().length > 0) {
      message = "Found " + this.searchResults().length + " results.";
    }
    return message;
  },

  searchResults: function() {
    var resultsObject = helpers.isPresent(this.props.valueLink.value) ? this.props.valueLink.value : {};
    var searchResults = Array.isArray(resultsObject.patents) ? resultsObject.patents : [];
    return searchResults;
  },

  render: function() {
    if(helpers.isPresent(this.searchResults())) {
      var results = this.searchResults().map(function(r, i) {
        return (<SearchResult result={r} showDocument={this.props.showDocument} />);
      }.bind(this));
    }

    return (
      <div ref="searchResults" className="search-results">
        <strong>{this.showResultsMessage()}</strong>
        {results}
      </div>
    );
  }
});

module.exports = SearchResults;
