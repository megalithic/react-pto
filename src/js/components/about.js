/** @jsx React.DOM */

var React = require('react');
var Versions = require('./versions');
var About = React.createClass({
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <Versions url="http://192.168.1.82:8080/dirsearch" />
      </article>
    );
  }
});

module.exports = About;
