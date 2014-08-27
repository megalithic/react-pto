/** @jsx React.DOM */

var React = require('react');
var moment = require('moment');
var jq     = require("jquery");

var DocumentDetail = React.createClass({
  getInitialState: function() {
    return {
      selectedDocument: null
    };
  },

  normalizedDocument: function(doc) {
    return doc;
  },

  componentDidMount: function() {
    window.addEventListener("scroll", function(evt) {
      if (jq('body').scrollTop() > 434 || jq('html').scrollTop() > 434) {
        if (jq(window).height() > 20) {
          jq('.document-detail').addClass('document-detail-fixed');
        }
      }
      else {
        jq('.document-detail').removeClass('document-detail-fixed');
      }
    }.bind(this));
  },

  render: function() {
    var r = this.normalizedDocument(this.props.valueLink.value);

    return (
      <div className="document-detail">
        <h3 className="title" title={r.inventionTitle} dangerouslySetInnerHTML={{__html: r.inventionTitle}} />
        <div className="metadata">
          <p>{r.guid}</p>
          <p>{moment(r.datePublished).format('L')}</p>
          <p>{r.type}</p>
        </div>
        <p className="inventors">{r.inventors_short}</p>
        <p className="claims" dangerouslySetInnerHTML={{__html: r.claimsHtml}} />
        <p className="abstract" dangerouslySetInnerHTML={{__html: r.abstractHtml}} />
        <p className="description" dangerouslySetInnerHTML={{__html: r.descriptionHtml}} />
      </div>
    );
  }
});

module.exports = DocumentDetail;
