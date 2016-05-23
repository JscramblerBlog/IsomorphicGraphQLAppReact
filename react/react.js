var react = require('react');
var reactDomServer = require('react-dom/server');
var tab = require('./tab');

function render(data) {
  const tabElement = react.createElement(tab, data);

  return reactDomServer.renderToString(tabElement);
}

module.exports = {
  render: render
};
