import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";

const RootReducer = combineReducers({
    // entities,
    session: sessionReducer,
});

export default RootReducer;