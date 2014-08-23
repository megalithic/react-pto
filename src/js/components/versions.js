/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');

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
    jq.ajax({
      url: this.props.url,
      type: 'GET',
      dataType: "jsonp",
      xhrFields: {
        withCredentials: true
      }
    }).then(function(res) {
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
      <div className="pure-menu pure-menu-open">
        <a className="pure-menu-heading">Versions:</a>
        <ul>
          <li><a>API: {v.api}</a></li>
          <li><a>SOLR: {v.solr}</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Versions;
