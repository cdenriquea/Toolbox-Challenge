import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/files";

// Fetch all files or filter by fileName
export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async (fileName) => {
    const url = fileName
      ? `${BASE_URL}/data?fileName=${fileName}`
      : `${BASE_URL}/data`;
    const response = await axios.get(url);
    return response.data;
  }
);

export const fileSlice = createSlice({
  name: "files",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fileSlice.reducer;
