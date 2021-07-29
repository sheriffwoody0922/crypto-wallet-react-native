import { combineReducers } from "redux";
import marketReducer from "./market/marketReducer";
import tabReducer from "./tab/tabReducer";

export default combineReducers({
    marketReducer,
    tabReducer,
})