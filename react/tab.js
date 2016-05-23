var react = typeof React === 'object' ? React : require('react');
var drink = typeof drink === 'object' ? drink : require('./drink');

var tab = react.createClass({
  getInitialState: function () {
    return { query: this.props.query, drink: this.props.drink };
  },
  onChange: function (e) {
    this.setState({ query: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    alert(this.state.query);
    this.setState({ drink: 'test' });
  },
  render: function () {
    return react.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      react.createElement('input', {
        id: 'bar-query',
        name: 'bar-query',
        autoFocus: true,
        onChange: this.onChange,
        value: this.state.query
      }),
      react.createElement('button', null, 'Get'),
      react.createElement(drink, { drink: this.state.drink }));
  }
});

if (typeof module === 'object') {
  module.exports = tab;
}
