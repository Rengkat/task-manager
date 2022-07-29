import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../app/taskFeatures/taskSlice";
export const store = configureStore({
  reducer: { task: taskReducer },
});
