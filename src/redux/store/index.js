import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducer";
import favoriteReducer from "../reducer/favoriteReducer";
import jobsReducer from "../reducer/jobsReducer";

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  jobs: jobsReducer
});

const store = configureStore({
  reducer: bigReducer
});
export default store;
