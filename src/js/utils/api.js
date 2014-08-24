var jq = require('jquery');

var baseUrl = "http://localhost:8080/dirsearch";
var API = {
  get: {
    versions: function(callback) {
      jq.ajax({
        url: baseUrl,
        type: 'GET',
        dataType: "jsonp",
        xhrFields: {
          withCredentials: true
        }
      }).done(callback);
    }
  },
  search: function(params, callback) {
    jq.ajax({
      url: baseUrl + "/searches",
      type: "POST",
      data: JSON.stringify({"q": params.query.text}),
      contentType: "application/json",
      xhrFields: {
        withCredentials: true
      }
    }).done(callback);
  }
};

module.exports = API;
