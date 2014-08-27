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
      },
      executing: false
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
        setTimeout(function() {
          this.setState({executing: false});
        }.bind(this), 500);
      }
    }.bind(this));
  },

  render: function() {
    var v = this.state.versions;
    var versionsListing = "";
    if(this.state.executing) {
      versionsListing = <p><i className="fa fa-spinner fa-spin"></i> Loading</p>;
    } else {
      versionsListing =
        <ul>
          <li><strong>API:</strong> {v.api}</li>
          <li><strong>SOLR:</strong> {v.solr}</li>
        </ul>;
    }

    return (
      <div className="pure-menu pure-menu-open versions">
        <a className="pure-menu-heading">External Services:</a>
        { versionsListing }
      </div>
    );
  }
});

module.exports = Versions;
