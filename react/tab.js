var react = typeof React === 'object' ? React : require('react');
var drink = typeof drink === 'function' ? drink : require('./drink');

var tab = react.createClass({
  getInitialState: function () {
    return { query: this.props.query, drink: this.props.drink };
  },
  onChange: function (e) {
    this.setState({ query: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var that = this;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/ajax?bar-query=${this.state.query}`, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onload = function (eXhr) {
      const xhrResponse = eXhr.target;

      that.setState({ drink: xhrResponse.responseText });
    };

    xhr.send();
  },
  render: function () {
    return react.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      react.createElement('input', {
        id: 'bar-query',
        name: 'bar-query',
        type: 'text',
        autoFocus: true,
        onChange: this.onChange,
        value: this.props.query
      }),
      react.createElement('button', null, 'Get'),
      react.createElement(drink, { drink: this.state.drink }));
  }
});

if (typeof module === 'object') {
  module.exports = tab;
}
