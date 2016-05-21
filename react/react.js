var reactDomServer = require('react-dom/server');
var tab = require('./tab');

function render() {
  const tabElement = tab.render();

  return reactDomServer.renderToString(tabElement);
}

module.exports = {
  render: render
};
