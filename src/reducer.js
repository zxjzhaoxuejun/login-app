// 合并所有的 reducer 并返回
import { combineReducers } from "redux";
import { auth } from "./auth.redux";
import { cartsReducer } from "./reducers/cart-reducer";
import { productsReducer } from "./reducers/products-reducer";

export default combineReducers({ auth, cartsReducer, productsReducer });
