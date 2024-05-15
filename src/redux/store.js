import { configureStore } from "@reduxjs/toolkit";
import CommonReducer from "./CommonReducer";

export default configureStore({
  reducer: {
    common: CommonReducer
  }
})