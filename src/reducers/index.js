import { combineReducers } from "redux";
import { productsReducer } from "./products-reducer";
import { cartsReducer } from "./cart-reducer";

const allReducer = {
  products: productsReducer,
  shops: cartsReducer
};
const rootReducer = combineReducers(allReducer);

export default rootReducer;
