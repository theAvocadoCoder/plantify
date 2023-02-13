import { configureStore } from "@reduxjs/toolkit";
import uploadFileReducer from "../pages/Home/slices/uploadFileSlice";


export const store = configureStore({
  reducer: {
    fileReducer: uploadFileReducer,
  },
});