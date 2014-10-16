/** @jsx React.DOM */
var React = require('react');

var TangleText = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    ratio: React.PropTypes.number,
    className: React.PropTypes.string,
    format: React.PropTypes.func,
  },
  getDefaultProps: function() {
    return {
      min: -Infinity,
      max: Infinity,
      ratio: 1,
      className: 'react-tangle-input',
      format: function(x) { return x; }
    };
  },
  getInitialState: function() {
    return { value: this.props.value };
  },
  bounds: function(num) {
    num = Math.max(num, this.props.min);
    num = Math.min(num, this.props.max);
    return num;
  },
  onChange: function(e) {
    this.setState({ value: e.target.value });
  },
  onBlur: function(e) {
    var parsed = parseFloat(this.state.value);
    if (isNaN(parsed)) {
      this.setState({ value: this.props.value });
    } else {
      this.props.onChange(this.bounds(parsed));
      this.setState({ value: this.bounds(parsed) });
    }
  },
  onMouseMove: function(e) {
    var change = this.startX - e.screenX;
    this.dragged = true;
    this.setState({
      value: this.bounds(this.startValue - (change * this.props.ratio))
    });
  },
  onMouseDown: function(e) {
    // short circuit if currently editing number
    if (e.target === document.activeElement) return;

    e.preventDefault();

    this.dragged = false;
    this.startX = e.screenX;
    this.startValue = this.state.value;

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  },
  onMouseUp: function(e) {
    e.preventDefault();
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    this.onBlur();
  },
  onClick: function(e) {
    // it not editing number, start to.
    if (!this.dragged && e.target !== document.activeElement) e.target.focus();
  },
  render: function() {
    /* jshint ignore:start */
    return (
      <div>
        <input
          className={this.props.className}
          type='text'
          onChange={this.onChange}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onClick={this.onClick}
          onBlur={this.onBlur}
          value={this.props.format(this.state.value)} />
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = TangleText;
