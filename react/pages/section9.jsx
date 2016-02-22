var React = require(`react`);
var lorem = require(`lorem-hipsum`);

var loroptions = {
  count: 1,
  units: `paragraphs`,
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 9,
  paragraphUpperBound: 12
};

var Section = React.createClass({
  getDefaultProps: function() {
    return {
      title: `Section the nineth`
    };
  },

  render: function() {
    return (
      <div>
        { this.props.elements.map(() => <p>{lorem(loroptions)}</p>) }
      </div>
    );
  }

});

module.exports = Section;
