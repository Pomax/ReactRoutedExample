var React = require('react');

var Grid = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Grid wefwefwe</h2>
        <ul>
        { this.props.elements.map(s => <li key={s}>{s}</li>) }
        </ul>
      </div>
    );
  }

});

module.exports = Grid;
