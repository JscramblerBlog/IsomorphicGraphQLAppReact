var component = require('../../react/react');
var should = require('should');

describe('A bar tab react component', function () {
  it('should render on the server', function () {
    const rendered = component.render();

    should.exist(rendered);
  });
});
