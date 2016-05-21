var react = require('react');

function render() {
  return react.createElement(
    'form',
    { method: 'GET' },
    react.createElement('input', null),
    react.createElement('button', null, 'Get tab'));
}

module.exports = {
  render: render
};
