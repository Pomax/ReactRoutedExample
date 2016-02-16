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

  render: function() {
    return (
      <div>
        <h1>Page harness</h1>
        <div>
          <Link to={'list'}>List</Link> - <Link to={'grid'}>Grid</Link> - <Link to={'cloud'}>Cloud</Link>
        </div>
        <Sidebar/>
        <section className="main">
        {
          React.cloneElement(this.props.children, {
            elements: elements
          })
        }
        </section>
      </div>
    );
  }

});

module.exports = Page;