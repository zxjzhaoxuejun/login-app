// 合并所有的 reducer 并返回
import { combineReducers } from "redux";
import { auth } from "./auth.redux";

export default combineReducers({ auth });
