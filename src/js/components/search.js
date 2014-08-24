/** @jsx React.DOM */

var React = require('react/addons');
var SearchBox = require('./search-box');

var Home = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { results: [] };
  },
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <SearchBox valueLink={this.linkState('results')} />
      </article>
    );
  }
});

module.exports = Home;
