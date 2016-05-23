var component = require('../../react/react');
var should = require('should');

describe('A bar tab react component', function () {
  it('should render on the server', function () {
    const rendered = component.render({ });

    should.exist(rendered);
  });

  it('should render with a drink query', function () {
    const data = { query: 'a-graph-ql-query' };

    const rendered = component.render(data);

    rendered.should.match(/a-graph-ql-query/);
  });

  it('should render with a drink', function () {
    const data = { drink: 'a-drink-from-query' };

    const rendered = component.render(data);

    rendered.should.match(/a-drink-from-query/);
  });
});
