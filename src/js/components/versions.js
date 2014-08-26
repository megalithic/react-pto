/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var API = require('../utils/api');
var cs = React.addons.classSet;

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
    this.setState({executing: true});
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
    var loadingVersions = function() {
      if(this.state.executing) {
        return (<li><a><strong>API:</strong> {v.api}</a></li><li><a><strong>SOLR:</strong> {v.solr}</a></li>);
      } else {
        return (<li><i className="fa fa-spinner fa-spin"></i> Loading</li>);
      }
    };

    return (
      <div className="pure-menu pure-menu-open versions">
        <a className="pure-menu-heading">External Services:</a>
        <ul>
          { loadingVersions() }
        </ul>
      </div>
    );
  }
});

module.exports = Versions;
