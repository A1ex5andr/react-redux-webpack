import React, {Component} from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import History from '../containers/history'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
        <History />
      </div>
    );
  }
}
