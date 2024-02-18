import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    setLoading(state) {
      state.loading = !state.loading;
    },
    setError(state) {
      state.error = !state.error;
    },
  },
});

export const mealSliceActions = mealSlice.actions;
export default mealSlice;
