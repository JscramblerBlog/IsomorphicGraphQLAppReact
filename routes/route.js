var index = require('./index');
var script = require('./script');

function route(req, res) {
  if (script(req, res)) {
  } else {
    index(req, res);
  }
}

module.exports = route;
