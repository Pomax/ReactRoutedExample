var React = require(`react`);
var Link = require(`react-router`).Link;
var Sidebar = require(`./Sidebar.jsx`);

var elements = (function() {
  var randomstring = require(`randomstring`);
  var elems = [];
  var i=100;

  while(i--) {
    elems.push(randomstring.generate());
  }
  return elems;
}());

var Page = React.createClass({

  getDefaultProps() {
    return {
      title: `Our Application`
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render: function() {
    var routedContent = React.cloneElement(this.props.children, {
      elements: elements
    });

    if (routedContent.props && typeof document !== `undefined`) {
      var title = routedContent.props.title;

      if (!title) { title = this.props.title; } else { title = this.props.title + ` - ` + title; }
      document.title = title;
    }

    return (
      <div>
        <header>
          <h1><Link to={'/'}>Page harness that acts as home link</Link></h1>
        </header>
        <div className="content">
          <Sidebar/>
          <section className="main">
          { routedContent }
          </section>
        </div>
      </div>
    );
  }

});

module.exports = Page;
