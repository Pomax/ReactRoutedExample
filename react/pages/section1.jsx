var React = require(`react`);
var Link = require(`react-router`).Link;
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
      title: `Section the first`
    };
  },

  render: function() {
    var content;
    var base = !this.props.children;

    if (base) {
      // React-Router 2.0.0's <Link> element does NOT support relative
      // URLs, so we need to build an application-absolute URL instead:
      var relURL = this.props.location.pathname + `details/`;

      content = [
        <p><Link to={relURL}>section details</Link></p>,
        this.props.elements.map(() => <p>{lorem(loroptions)}</p>)
      ];
    } else { content = this.props.children; }
    return <div>{ content }</div>;
  }

});

module.exports = Section;
