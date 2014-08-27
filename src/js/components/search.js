/** @jsx React.DOM */

var React = require('react/addons');
var jq = require('jquery');
var helpers = require('../utils/helpers');
var SearchBox = require('./search-box');
var SearchResults = require('./search-results');
var DocumentDetail = require('./document-detail');
var API = require("../utils/api");

var Search = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      results: "Please enter a search query.",
      selectedDocument: null
    };
  },

  handleResults: function(data) {
    this.setState({results: data});
    jq('html, body').animate({
      scrollTop: jq(".search-box").offset().top
    }, 500);
  },

  showDocument: function(documentId) {
    API.get.document(documentId, function(result) {
      this.setState({selectedDocument: result});
    }.bind(this));
  },

  render: function() {
    var renderDocumentDetail = null;
    var gridClass = "pure-u-1-1";
    if(helpers.isPresent(this.state.selectedDocument)) {
      renderDocumentDetail = <DocumentDetail valueLink={this.linkState('selectedDocument')} />;
      gridClass = "pure-u-1-2";
    }

    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <SearchBox updateResults={this.handleResults} />
        <div className="results-content pure-g">
          <div className={gridClass}><SearchResults valueLink={this.linkState('results')} showDocument={this.showDocument} /></div>
          <div className={gridClass}>{renderDocumentDetail}</div>
        </div>
      </article>
    );
  }
});

module.exports = Search;
