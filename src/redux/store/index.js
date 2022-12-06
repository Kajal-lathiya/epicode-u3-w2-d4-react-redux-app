import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import favoriteReducer from "../reducer/favoriteReducer";
import jobsReducer from "../reducer/jobsReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_SECRET_KEY
  //   })
  // ]
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  jobs: jobsReducer
});

const persistreducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
export const persistor = persistStore(store);
