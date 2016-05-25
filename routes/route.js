var index = require('./index');
var script = require('./script');
var ajax = require('./ajax');

function route(req, res) {
  if (script(req, res)) {

  } else if (ajax(req, res)) {

  } else {
    index(req, res);
  }
}

module.exports = route;
