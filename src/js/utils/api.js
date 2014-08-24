var jq = require('jquery');

var mockUrl = "http://jsonplaceholder.typicode.com";
var baseUrl = "http://192.168.1.82:8080/dirsearch";
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
      })
      .done(callback);
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
    })
    .done(callback);
  },
  // make mock REST calls to JSONPlaceholder
  mock: {
    search: function(params, callback) {
      jq.ajax({
        url: mockUrl + "/posts",
        type: "GET",
        contentType: "application/json"
      })
      .done(callback);
    }
  }
};

module.exports = API;
