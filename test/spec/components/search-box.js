/** @jsx React.DOM */

jest.dontMock('../../../src/js/components/search-box.js');

describe('SearchBox', function () {
  var SearchBox, component, React, TestUtils;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    SearchBox = require('../../../src/js/components/search-box.js');
    component = TestUtils.renderIntoDocument(SearchBox());
  });

  it('should create a new instance of SearchBox', function () {
    expect(component).toBeDefined();
  });
});
