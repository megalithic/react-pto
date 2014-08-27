/** @jsx React.DOM */

var React = require('react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var cs = React.addons.classSet;
var moment = require('moment');

var SearchResult = React.createClass({
  getInitialState: function() {
    return { resultIsFocused: false };
  },

  toggleFocused: function() {
    this.setState({ resultIsFocused: !this.state.resultIsFocused });
  },

  normalizedDocument: function(doc) {
    return doc;
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
    var r = this.normalizedDocument(this.props.result);

    return (
      <dl className={focusedClass} onMouseEnter={this.toggleFocused} onMouseLeave={this.toggleFocused}>
        <dt>{r.inventionTitle}</dt>
        <ReactCSSTransitionGroup transitionName="metadata">
          <dd className={metadataClass} key="1">
            <p>{r.guid}</p>
            <p>{moment(r.datePublished).format('L')}</p>
            <p>{r.type}</p>
          </dd>
        </ReactCSSTransitionGroup>
        <dd>{r.inventors_short}</dd>
        <dd className="claims" dangerouslySetInnerHTML={{__html: r.claimsHtml}} />
        <dd className="abstract" dangerouslySetInnerHTML={{__html: r.abstractHtml}} />
        <dd className="description" dangerouslySetInnerHTML={{__html: r.descriptionHtml}} />
      </dl>
    );
  }
});

module.exports = SearchResult;
