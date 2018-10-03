import { createStore, combineReducers, applyMiddleware } from "redux";
import camerasReducer from "./camerasReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let rootReducer = combineReducers({
  cameras: camerasReducer
});

let middleware = [thunk, logger];

export default () => createStore(rootReducer, applyMiddleware(...middleware));
