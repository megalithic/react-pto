/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var _ = require("underscore");

var SearchResult = React.createClass({
  render: function() {
    var r = this.props.result;
    return (
      <dl className="result">
        <dt>{r.title}</dt>
        <dd className="metadata"></dd>
        <dd>{r.body}</dd>
      </dl>
    );
  }
});

module.exports = SearchResult;
