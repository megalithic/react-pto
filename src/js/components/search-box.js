/** @jsx React.DOM */

var React = require('react');
var jq = require('jquery');
var API = require('../utils/api');

var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      query: {
        text: ""
      }
    };
  },

  handleSubmit: function(evt) {
    if(evt.charCode === 13) {
      this.setState({query: { text: evt.target.value }}, function() {
        API.search({query: { text: this.state.query.text }}, function(res) {
          console.log(res);
          this.props.updateResults(res);
        }.bind(this));
      });
    }
  },

  componentDidMount: function() { },

  render: function() {
    return (
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <legend><i className="fa fa-exclamation-triangle"></i> <em>Queries entered below will not be BRS parsed.</em></legend>
          <div className="pure-g">
            <div className="pure-u-1">
              <input id="search" className="pure-input-1" type="search" onKeyPress={this.handleSubmit} />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = SearchBox;
