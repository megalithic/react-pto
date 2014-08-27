var helpers = {
  isEmptyObject: function(obj) {
    return Object.keys(obj).length === 0;
  },

  isEmpty: function (val) {
    return typeof val === 'undefined' || val === null || val === "";
  },

  isPresent: function (val) {
    return typeof val !== 'undefined' && val !== null && val !== "";
  },

  isString: function(val) {
    return typeof val == 'string' || val instanceof String;
  }
};

module.exports = helpers;
