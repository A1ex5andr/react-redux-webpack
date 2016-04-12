import {combineReducers} from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBookReducer from "./reducer_active_book";
import HistoryReducer from "./reducer_history";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  history: HistoryReducer
});

export default rootReducer;