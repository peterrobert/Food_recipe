import { applyMiddleware, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import ReduxThunk from 'redux-thunk';

const store = createStore(categoryReducer, applyMiddleware(ReduxThunk()))



export default store