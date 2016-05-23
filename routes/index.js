var graphql = require('graphql');
var url = require('url');
var engine = require('../engines/engine');
var react = require('../react/react');
var schema = require('../graphql/schema');

var request = {
  path: 'views/index.html',
  type: 'text/html; charset=utf-8',
  nocache: true
};

var renderEngine = {
  handler: engine.httpHandler,
  template: engine.mustache
};

function getIndex(req, res) {
  const queryString = url.parse(req.url, true).query;
  const drinkQuery = queryString['bar-query'];

  if (drinkQuery) {
    renderWithDrink(res, drinkQuery);
  } else {
    renderWithoutDrink(res);
  }
}

function renderWithoutDrink(res) {
  request.data = getViewData({ });

  engine.render(request, res, renderEngine);
}

function renderWithDrink(res, query) {
  graphql.graphql(schema, query).then(function (drink) {
    request.data = getViewData({ query: query, drink: JSON.stringify(drink) });

    engine.render(request, res, renderEngine);
  });
}

function getViewData(data) {
  return {
    reactComponent: react.render(data)
  };
}

module.exports = getIndex;
