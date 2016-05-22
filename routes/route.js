var index = require('./index');

function route(req, res) {
  index(req, res);
}

module.exports = route;
