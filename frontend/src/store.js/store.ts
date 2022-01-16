import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const configureStore = (preloadedState={}) =>
    createStore(RootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, logger)));

export default configureStore;


