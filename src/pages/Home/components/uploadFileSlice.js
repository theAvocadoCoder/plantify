import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
  progress: 0,
};

export const uploadFileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFile, setProgress } = uploadFileSlice.actions;

export default uploadFileSlice.reducer;