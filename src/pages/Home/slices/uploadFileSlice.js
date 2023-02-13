import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
  name: null,
  size: null,
};

export const uploadFileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    closeFile: (state) => {
      state.file = null;
      state.name = null;
      state.size = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setFile, setName, setSize, closeFile } = uploadFileSlice.actions;

export default uploadFileSlice.reducer;