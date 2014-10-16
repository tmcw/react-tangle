/** @jsx React.DOM */
var TangleText = require('../'),
  React = require('react');

var Example = React.createClass({
  getInitialState: function() {
    return { value: 0 };
  },
  onChange: function(value) {
    this.setState({ value: value });
  },
  render: function() {
    /* jshint ignore:start */
    return (
      <div>
        <TangleText
          value={this.state.value}
          onChange={this.onChange} />
      </div>
    );
    /* jshint ignore:end */
  }
});

React.renderComponent(<Example />, document.getElementById('app'));
