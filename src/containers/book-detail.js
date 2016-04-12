import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  
  render() {
    if (!this.props.data)
      return <div className="label label-default">Please, select book to get started</div>

    return (
      <div className="col-sm-8">
        <h3>Details for:</h3>
        <br/>
        <div>
          Title:
          <b> {this.props.data.book.title} </b>
        </div>
        <div>Pages:
          <i> {this.props.data.book.pages}</i>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);