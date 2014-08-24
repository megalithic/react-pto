/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var _ = require("underscore");
var SearchResult = require("./search-result");

var SearchResults = React.createClass({
  showResultsMessage: function() {
    return _.isArray(this.props.valueLink.value) && this.props.valueLink.value.length === 0 ? "No results found." : "";
  },

  searchResults: function() {
    return _.isArray(this.props.valueLink.value) ? this.props.valueLink.value : [];
  },

  render: function() {
    var results = this.searchResults().map(function(r, i) {
      return (<div key={i}>{r.title}</div>);
    });

    return (
      <div className="results">
        {this.showResultsMessage()}
        {results}
      </div>
    );
  }
});

module.exports = SearchResults;
