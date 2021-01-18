import {surveySlice} from "./surveySlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: surveySlice.reducer,
});