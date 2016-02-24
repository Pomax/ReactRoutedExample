var React = require(`react`);

var List = React.createClass({

  getInitialState() {
    return {
      sort: `asc`
    };
  },

  setSorting: function(evt) {
    var origin = evt.target;

    this.setState({sort: origin.textContent});
  },

  formContent: function() {
    var sorted = this.props.elements.sort();

    if (this.state.sort === `desc`) { sorted.reverse(); }
    return sorted.map(s => <li key={s}>{s}</li>);
  },

  render: function() {
    return (
      <div>
        <div>
          <h2>Data view with JS sorting</h2>
          <p>
            Pick your sorting, if JS is enabled:
            <button onClick={this.setSorting}>asc</button> / <button onClick={this.setSorting}>desc</button>
          </p>
        </div>

        <div className="data">
          <h3>data columns!</h3>
          <ul>
          { this.formContent() }
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = List;
