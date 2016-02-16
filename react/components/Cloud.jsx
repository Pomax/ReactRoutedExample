var React = require('react');

var Cloud = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Cloud view</h2>
        <ul>
        { this.props.elements.map(s => <li key={s}>{s}</li>) }
        </ul>
      </div>
    );
  }

});

module.exports = Cloud;
