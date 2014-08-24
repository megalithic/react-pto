/** @jsx React.DOM */

var React = require('react');
var SearchBox = require('./search-box');

var Home = React.createClass({
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <SearchBox />
      </article>
    );
  }
});

module.exports = Home;
