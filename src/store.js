import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers/index';


const reducer = combineReducers({ ...reducers });
const store = createStore(reducer);

export default store;