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
        <div className='clearfix pad1 keyline-bottom'>
          <div className='col4'>
            <TangleText value={this.state.value} onChange={this.onChange} />
          </div>
          <div className='col8'>
            Default settings, no minimum, maximum, or step.
          </div>
        </div>
        <div className='clearfix pad1'>
          <div className='col4'>
            <TangleText value={this.state.value} onChange={this.onChange}
              min={0} max={1} ratio={0.02} />
          </div>
          <div className='col8'>
            Choose numbers between 0 and 1 with a 0.02 step
          </div>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
});

React.renderComponent(<Example />, document.getElementById('app'));
