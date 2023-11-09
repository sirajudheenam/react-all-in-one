import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReduxStoreDemo from '../components/ReduxStoreDemo/ReduxStoreDemo';
import userReducer from '../components/ReduxStoreDemo/reducers/userReducer';
import todoReducer from '../components/ReduxStoreDemo/reducers/todoReducer';
import thunk from 'redux-thunk';
import ReduxStoreDemoRouter from '../components/ReduxStoreDemo/ReduxStoreDemoRouter';
// const store = createStore(rootReducer);
// const dummyStore = createStore(todoReducer);

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// const store = createStore(userReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));
export const ReducedApp = function () {
  //    TODO: Find out how to implement this
  return <p>Reduced App </p>;
};
