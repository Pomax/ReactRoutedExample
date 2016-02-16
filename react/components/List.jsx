var React = require('react');

var List = React.createClass({

  render: function() {
    return (
      <div>
        <h2>List view</h2>
        <ul>
        { this.props.elements.map(s => <li key={s}>{s}</li>) }
        </ul>
      </div>
    );
  }

});

module.exports = List;
