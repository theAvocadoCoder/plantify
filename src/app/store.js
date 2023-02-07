import { configureStore } from "@reduxjs/toolkit";
import uploadFileReducer from "../pages/Home/components/uploadFileSlice";


export const store = configureStore({
  reducer: {
    file: uploadFileReducer,
  },
});