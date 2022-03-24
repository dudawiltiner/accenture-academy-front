import { combineReducers } from "redux";

import TodoReducers from './todo.reducers';
import ProductReducers from './product.reducers';
import CartReducers from './product.reducers';

export default combineReducers({
    todos: TodoReducers,
    products: ProductReducers
})