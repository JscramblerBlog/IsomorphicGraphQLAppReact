var react = typeof React === 'object' ? React : require('react');

var drink = react.createClass({
  render: function () {
    if (this.props.drink) {
      return react.createElement(
        'p',
        null,
        react.DOM.strong(null, 'Drink: '),
        react.DOM.span(null, this.props.drink));
    }

    return null;
  }
});

if (typeof module === 'object') {
  module.exports = drink;
}
