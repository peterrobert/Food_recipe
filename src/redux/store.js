import { applyMiddleware, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from 'redux-thunk';

const store = createStore(categoryReducer, applyMiddleware(thunk))



export default store