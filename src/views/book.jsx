var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

class Book extends React.Component {
  render() {
    return (
      <div>
        <div>title: {this.props.data.title}</div>
        <div>author: {this.props.data.author}</div>
      </div>
      
    );
  }
}

module.exports = Book;
