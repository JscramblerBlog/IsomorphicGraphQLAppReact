var react = require('react');
var form = require('./form');
var header = require('./header');

function render() {
  const tab = react.createClass({
    render: function () {
      return react.createElement(
        'div',
        null,
        header.render(),
        form.render());
    }
  });

  return react.createElement(tab, null);
}

module.exports = {
  render: render
};
