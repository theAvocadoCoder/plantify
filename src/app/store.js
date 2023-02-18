import { configureStore } from "@reduxjs/toolkit";
import uploadFileReducer from "../pages/Home/slices/uploadFileSlice";
import identifiedPlantReducer from "../pages/Home/slices/identifiedPlantSlice";


export const store = configureStore({
  reducer: {
    fileReducer: uploadFileReducer,
    plantReducer: identifiedPlantReducer,
  },
});