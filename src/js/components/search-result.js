/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var _ = require("underscore");
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var cs = React.addons.classSet;

var SearchResult = React.createClass({
  getInitialState: function() {
    return { resultIsFocused: false };
  },

  toggleFocused: function() {
    this.setState({ resultIsFocused: !this.state.resultIsFocused });
  },

  render: function() {
    var focusedClass = cs({
      "result": true,
      "focused": this.state.resultIsFocused
    });
    var metadataClass = cs({
      "metadata": true,
      "metadata-enter": this.state.resultIsFocused,
      "metadata-leave": !this.state.resultIsFocused
    });
    var r = this.props.result;

    return (
      <dl className={focusedClass} onMouseEnter={this.toggleFocused} onMouseLeave={this.toggleFocused}>
        <dt>{r.title}</dt>
        <ReactCSSTransitionGroup transitionName="metadata">
          <dd className={metadataClass} key="1">
            <p>{r.id}</p>
          </dd>
        </ReactCSSTransitionGroup>
        <dd>{r.body}</dd>
      </dl>
    );
  }
});

module.exports = SearchResult;
