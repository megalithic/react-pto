/** @jsx React.DOM */

var React = require('react/addons');
var SearchBox = require('./search-box');

var Home = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { results: [] };
  },
  handleResults: function(results) {
    console.debug("we haev results!", results);
  },
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <SearchBox updateResults={this.handleResults} />
      </article>
    );
  }
});

module.exports = Home;
