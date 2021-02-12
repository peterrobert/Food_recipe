import { applyMiddleware, combineReducers, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import thunk from "redux-thunk";
import groupReducer from "./Reducers/groupReducer";
import varietyReducer from "./Reducers/verietyReducer";
import filterReducer from "./Reducers/filterReducer";
const rootReducers = combineReducers({
  cat: categoryReducer,
  grp: groupReducer,
  recipe:varietyReducer,
  filt: filterReducer
});


const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
