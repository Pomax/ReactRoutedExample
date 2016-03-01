var React = require('react');
var CircleSegment = require('./CircleSegment.jsx');
var BBox = require('./bbox');

var defaultProps = {
  data: require('./webliteracy'),
  radius: 80,
  spacing: 3,
  leafRadius: 7,
  leafSpacing: 2
};

var CircleTree = React.createClass({
  getDefaultProps() {
    return defaultProps;
  },

  getInitialState() {
    return {
      data: this.props.data,
      label: Object.keys(this.props.data)[0],
      bbox: (new BBox()).grow({x: 0, y: 0})
    };
  },

  componentWillMount() {
    this.setState({
      segments: this.formSegments()
    });
  },

  updateBBox(bbox) {
    this.setState({ bbox: this.state.bbox.expand(bbox) });
  },

  formSegments() {
    var label = this.state.label,
        data = this.props.data[label],
        props = Object.assign({}, this.props, {
          r2: this.props.radius,
          label: label,
          data: data,
          updateBBox: this.updateBBox
        });
    return <CircleSegment {...props}/>;
  },

  render() {
    var style = { overflow: "visible" };
    var bbox = this.state.bbox;
    window.bbox = bbox;
    var viewBox = [bbox.x, bbox.y, bbox.w, bbox.h].join(' ');
    return (
      <svg style={style} width={bbox.w} height={bbox.h} viewBox={viewBox}>
        <g transform={["translate(",0,",",0,")"].join('')}>
        { this.state.segments }
        </g>
      </svg>
    );
  }
});

module.exports = CircleTree;
