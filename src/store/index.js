import { applyMiddleware, legacy_createStore as createStore } from "redux";

import { reducers } from "./reducers";
import thunk from "redux-thunk";
const initialState = {};
/* const reducers = (state, action) => {
  switch (action.type) {
    case "HELLO":
      return { Hello: "Hello" };
    case "BAKA":
      return { Bake: action.payload };
    case "GG":
      return { GG: action.payload };
    default:
      break;
  }
};*/

const store = createStore(reducers, initialState, applyMiddleware(thunk));
export default store;
