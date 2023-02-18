import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  plantDetails: null,
  error: ""
};

export const fetchPlantDetails = createAsyncThunk("fetchPlantDetails", (file) => {
  return axios
    .post("https://api.plant.id/v2/identify", {
      images: [file],
      plant_details: [
        "common_names",
        "wiki_description",
        "name_authority",
        "url",
        "watering",
        "wiki_image"
      ]
    }, {
      headers: {
        "Api-Key": "QVEdLt0ooP7VIzmPSZo3gXz8Y32IsBLyn2z1fSpjxIl9m2sRGZ"
      }
    })
    .then((response) => {
      if (response.data.suggestions?.length >= 1) {
        return response.data.suggestions[0];
      }
    })
    .catch((error) => {
      return error;
    });
})

export const identifiedPlantSlice = createSlice({
  name: "plant",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlantDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPlantDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.plantDetails = action.payload;
    });
    builder.addCase(fetchPlantDetails.rejected, (state, action) => {
      state.loading = false;
      if (action.error.response) {
        state.error = {
          data: action.error.response.data,
          status: action.error.response.status,
          headers: action.error.response.headers,
        };
      } else if (action.error.request) {
        state.error = action.error.request;
      } else {
        state.error = action.error.message;
      }
    })
  },
});

// Action creators are generated for each case reducer function
export const { setPlantDetails } = identifiedPlantSlice.actions;

export default identifiedPlantSlice.reducer;