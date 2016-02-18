var React = require('react');
var Link = require('react-router').Link;

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="sidebar">
        <h3>nav menu</h3>
        <ul>
          <li><Link to={'/section1/'}>section 1</Link></li>
          <li><Link to={'/section2/'}>section 2</Link></li>
          <li><Link to={'/section3/'}>section 3</Link></li>
          <li><Link to={'/section4/'}>section 4</Link></li>
          <li><Link to={'/section5/'}>section 5</Link></li>
          <li><Link to={'/section6/'}>section 6</Link></li>
          <li><Link to={'/section7/'}>section 7</Link></li>
          <li><Link to={'/section8/'}>section 8</Link></li>
          <li><Link to={'/section9/'}>section 9</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
