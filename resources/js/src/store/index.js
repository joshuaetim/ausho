import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducer";

const loggerMiddleware = createLogger();
const persistConfig = {
  storage,
  key: "root",
  timeout: null,
  keyPrefix: "",
  blacklist: ["alert"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const persistor = persistStore(store);

export { store, persistor };
