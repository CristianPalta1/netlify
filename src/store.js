import { createStore, applyMiddleware, compose } from "../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

const estadoInicial = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  estadoInicial,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
