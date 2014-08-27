/** @jsx React.DOM */

jest.dontMock('../../../src/js/components/app.js');
jest.dontMock('../../../src/js/utils/routes.js');

describe('Main', function () {
  var App, component, React, TestUtils, Link, Routes;

  beforeEach(function () {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    // Routes = require('../../../src/js/utils/routes.js');
    App = require('../../../src/js/components/app.js');
    component = React.renderComponent(App({activeRouteHandler: function(){}}), document.createElement("div"));
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
