import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // 현재 window환경이고, 거기에 __REDUX_DEVTOOLS_EXTENSION_COMPOSE__가 설치되어 서 사용하는건지
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
  : compose; //compose:조합

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
