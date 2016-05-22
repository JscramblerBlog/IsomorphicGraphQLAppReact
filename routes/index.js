var engine = require('../engines/engine');
var react = require('../react/react');

var request = {
  path: 'views/index.html',
  type: 'text/html; charset=utf-8',
  nocache: true
};

function getIndex(req, res) {
  request.data = getData();

  const param = { handler: engine.httpHandler, template: engine.mustache };

  engine.render(request, res, param);
}

function getData() {
  return {
    reactComponent: react.render()
  };
}

module.exports = getIndex;
