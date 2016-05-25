var engine = require('../engines/engine');

function getScript(req, res) {
  if (req.method === 'GET' && req.url.indexOf('/react/') >= 0) {
    const request = {
      path: req.url.slice(1),
      type: 'application/javascript; charset=utf-8'
    };

    engine.render(request, res, { handler: engine.httpHandler });

    return true;
  }

  return false;
}

module.exports = getScript;
