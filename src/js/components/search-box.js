/** @jsx React.DOM */

var React = require('react');
var API = require('../utils/api');
var helpers = require("../utils/helpers");
var cs = React.addons.classSet;

var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      query: {
        text: ""
      },
      executing: false
    };
  },

  queryText: function(q) {
    return helpers.isEmpty(q) ? this.refs.queryText.getDOMNode().value : q;
  },

  hasSearchResults: function() {
    return Array.isArray(this.props.valueLink.value) && this.props.valueLink.value.length > 0;
  },

  handleSubmit: function(evt) {
    var queryText = this.queryText(evt.target.value);
    if(helpers.isPresent(queryText)) {
      this.setState({executing: true});
      this.setState({query: { text: queryText }}, function() {
        API.search({query: { text: this.state.query.text }}, function(res) {
          this.props.updateResults(res);
          this.setState({executing: false});
        }.bind(this));
      });
    }
  },

  componentDidMount: function() {
    this.refs.queryText.getDOMNode().focus();
  },

  handleKeyPress: function(evt) {
    evt.stopPropagation();
  },

  render: function() {
    var searchClass = cs({
      "fa": true,
      "fa-spinner fa-spin": this.state.executing,
      "fa-search": !this.state.executing,
    });
    return (
      <div className="search-box">
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend><i className="fa fa-bell-o"></i> <em>Queries entered below, will not be visually parsed.</em></legend>
            <div className="pure-g">
              <div className="pure-u-md-4-5">
                <input ref="queryText" className="queryText pure-input-1" type="text" placeholder="&#xF002; Enter a search query..." onKeyPress={this.handleKeyPress} />
              </div>
              <div className="pure-u-md-1-5">
                <button type="submit" className="pure-button pure-input-1 pure-button-primary" title="Execute Search"><i className={searchClass}></i> Search</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;
