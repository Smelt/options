import { createStore, combineReducers } from 'redux';
import Expenses from '../store/reducers/expenses';


export default () => {
  const store = createStore(
    combineReducers({
      Expenses
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
