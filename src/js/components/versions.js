/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var API = require('../utils/api');

var Versions = React.createClass({
  getInitialState: function() {
    return {
      versions: {
        api: "",
        solr: "",
        fe: ""
      }
    };
  },

  componentDidMount: function() {
    API.get.versions(function(res) {
      var versions = {};
      res.versions.forEach(function(item, i) {
        versions[item.product.toLowerCase()] = item.name;
      });

      if (this.isMounted()) {
        this.setState({
          versions: {
            api: versions["api"],
            solr: versions["solr"]
          }
        });
      }
    }.bind(this));
  },

  render: function() {
    var v = this.state.versions;
    return (
      <div className="pure-menu pure-menu-open versions">
        <a className="pure-menu-heading">External Services:</a>
        <ul>
          <li><a><strong>API:</strong> {v.api}</a></li>
          <li><a><strong>SOLR:</strong> {v.solr}</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Versions;
