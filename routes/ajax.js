var graphql = require('graphql');
var url = require('url');
var schema = require('../graphql/schema');
var engine = require('../engines/engine');

var content = {
  type: 'application/json; charset=utf-8',
  nocache: true
};

function getAjax(req, res) {
  if (req.method === 'GET' && req.url.startsWith('/ajax') && req.headers['x-requested-with'] === 'XMLHttpRequest') {
    const queryString = url.parse(req.url, true).query;
    const drinkQuery = queryString['bar-query'];

    graphql.graphql(schema, drinkQuery).then(function (drink) {
      content.response = JSON.stringify(drink);

      engine.httpHandler(null, res, content);
    });

    return true;
  }

  return false;
}

module.exports = getAjax;
