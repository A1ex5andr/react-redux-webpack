import React, {Component} from "react";
import {connect} from 'react-redux';
import {writeHistory} from '../actions/index';

class History extends Component {

  render() {
    if (!this.props.history)
      return <div className="history col-sm-12">No History yet.</div>

    return (
      <div className="history col-sm-12">
        <h4>History</h4>
        <h5>Book: {this.props.history.book.title}</h5>
        <p>
          <i>Added at:</i><br/>
          {this.props.history.timestamp.day} -
          {this.props.history.timestamp.hours}:
          {this.props.history.timestamp.minutes}:
          {this.props.history.timestamp.seconds}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    history: state.history
  }
}

export default connect(mapStateToProps)(History);