import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slices/cartSlice";

export const store = configureStore({
  reducer
});
