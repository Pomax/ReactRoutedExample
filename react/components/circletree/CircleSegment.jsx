var React = require('react');
var color = require('./colors');
var computer = require('./segment-computer.jsx');

var defaultProps = {
  // inner and outer radius, and segment padding
  r1: 0,
  r2: 1,
  spacing: 1,
  // start and end angle
  start: 0,
  end: computer.tau,
  // total number of segments, and id of this segment
  depth: 0,
  id: 0,
  total: 1
};

var CircleSegment = React.createClass({
  getDefaultProps() {
    return defaultProps;
  },

  getInitialState() {
    return computer.getSegmentInformation(this.props);
  },

  componentWillMount() {
    this.setState({
      label: this.getLabel(),
      children: this.props.leaf? null : this.setupChildren()
    });
  },

  componentDidMount() {
    this.props.updateBBox(this.state.bbox);
  },

  updateBBox(bbox) {
    this.setState({ bbox: this.state.bbox.expand(bbox) }, () => {
      this.props.updateBBox(this.state.bbox);
    });
  },

  getLabel() {
    return computer.getSVGLabel(this.props, this.state.center);
  },

  setupChildren() {
    var data = this.props.data;

    // Leaf nodes are encoded as array
    if(data.map) return this.formLeaves();

    // real nodes are encoded as "more CircleSegments"
    var nr1 = this.props.r2 + this.props.spacing,
        nr2 = nr1 + (this.props.r2 - this.props.r1),
        keys = Object.keys(data),
        total = keys.length,
        props = Object.assign({}, this.props, {
          total: total,
          r1: nr1,
          r2: nr2,
          start: this.state.startAngle,
          end: this.state.startAngle + this.state.angleDelta,
          depth: this.props.depth + 1,
          updateBBox: this.updateBBox,
          fontSize: 14
        });

    // generate the set of child segments
    return keys.map( (label, position) => {
      var childProps = Object.assign({}, props, {
        label: label,
        id: position,
        data: data[label]
      });
      return <CircleSegment {...childProps} key={label}/>;
    });
  },

  formLeaves() {
    var baseProps = {
      leaf: true,
      start: this.state.startAngle,
      updateBBox: this.updateBBox
    };

    return this.props.data.map( (type, pos) => {
      var radius = this.props.r2,
          leafRadius = this.props.leafRadius,
          leafSpacing = this.props.leafSpacing,
          spacing = this.props.spacing,
          r1 = radius + spacing + pos * (leafSpacing + leafRadius),
          r2 = r1 + leafRadius,
          leafProps = Object.assign({}, baseProps, {
            r1: r1,
            r2: r2,
            end: this.state.startAngle + this.state.angleDelta - this.state.angleOffset,
            fill: color(type)
          });
      return <CircleSegment {...leafProps} key={type}/>;
    });
  },

  getPath() {
    return computer.getSVGPath(this.state.points, Object.assign({}, this.props, {
      angleDelta: this.state.angleDelta
    }));
  },

  toggle() {
    if (this.props.depth === 1) {
      console.log("do things based on "+this.props.label);
    }
  },

  restore() {
    if (this.props.depth === 1) {
      this.setState({ isOffset: false });
    }
  },

  highlight() {
    if (this.props.depth === 1) {
      this.setState({ isOffset: true });
    }
  },

  render() {
    var path = this.getPath();
    var offset = this.state.isOffset ? "translate(" + [this.state.offset.x, this.state.offset.y].join(',') + ")" : null;
    return (
      <g transform={offset} onMouseEnter={this.highlight} onMouseLeave={this.restore} onClick={this.toggle}>
        { path }
        { this.state.label }
        { this.state.children }
      </g>
    );
  }
});

module.exports = CircleSegment;
