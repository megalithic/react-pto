/** @jsx React.DOM */

var React = require('react/addons');
var jq = require('jquery');
var SearchBox = require('./search-box');
var SearchResults = require('./search-results');

var Home = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { results: "Please enter a search query." };
  },
  handleResults: function(data) {
    this.setState({results: data});
    jq('html, body').animate({
      scrollTop: jq(".results").offset().top
    }, 500);
  },
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <SearchBox updateResults={this.handleResults} />
        <SearchResults valueLink={this.linkState('results')} />
      </article>
    );
  }
});

module.exports = Home;
