import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectBook} from '../actions/index';

class History extends Component {

  renderTable() {
    return this.props.history.map(record => {
      return (
        <tr key={record.date}>
          <td><b>{record.date} > </b></td>
          <td> Changed from: {record.changedFrom} - </td>
          <td> Changed to: {record.changedTo}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <table>
            {this.renderTable()}
          </table>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    history: state.history
  }
}

export default connect(mapStateToProps)(History);