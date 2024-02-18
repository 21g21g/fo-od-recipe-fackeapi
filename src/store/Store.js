import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./Mealreducer";

const store = configureStore({
  reducer: {
    meal: mealSlice.reducer,
  },
});

export default store;
