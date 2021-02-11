import { applyMiddleware, combineReducers, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from "redux-thunk";
import groupReducer from "./Reducers/groupReducer";
import varietyReducer from "./Reducers/verietyReducer";
const rootReducers = combineReducers({
  cat: categoryReducer,
  grp: groupReducer,
  recipe:varietyReducer
});


const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
