import { combineReducers } from "redux";
import { product } from "./productReducer";
import { theme } from "./theme";
import { favBooks } from "./favBook";
import status from "./status";
import { cartBooks } from "./cart";

export const reducers = combineReducers({
  product: product,
  theme: theme,
  favBooks: favBooks,
  status: status,
  cartBooks: cartBooks,
});
/* display: flex;
  margin-left: 30vh;
  position: relative;
  bottom: 31px;*/
