var React = require('react');
var Link = require('react-router').Link;
var Sidebar = require('./Sidebar.jsx');

var elements = (function() {
  var randomstring = require('randomstring');
  var elements = [];
  var i=100;
  while(i--) {
    elements.push(randomstring.generate());
  }
  return elements;
}());

var Page = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  componentWillMount: function(nextProps, nextState) {
    this.context.router.listenBefore(function(action) {
      console.log("navigating to: ", action);
    });

    this.context.router.listenBefore(function(action) {
      console.log("navigated: ", action);
    });
  },

  render: function() {
    return (
      <div>
        <header>
          <h1><Link to={'/'}>Page harness that acts as home link</Link></h1>
        </header>
        <div className="content">
          <Sidebar/>
          <section className="main">
          {
            React.cloneElement(this.props.children, {
              elements: elements
            })
          }
          </section>
        </div>
      </div>
    );
  }

});

module.exports = Page;