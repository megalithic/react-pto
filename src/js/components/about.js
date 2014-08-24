/** @jsx React.DOM */

var React = require('react');
var Versions = require('./versions');
var About = React.createClass({
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <p>This site is meant to be a POC to show how any UI can be put atop the EST API to facilitate patent searching.</p>
        <Versions />
      </article>
    );
  }
});

module.exports = About;
