import { createSlice } from "@reduxjs/toolkit";

export const CommonSlice = createSlice({
  name: "common",
  initialState: {
    focusedExpense: null
  },
  reducers: {
    setFocusedExpense: (state, action) => {
      state.focusedExpense = action.payload
    },
    removeFocusFromExpense: (state, action) => {
      state.focusedExpense = null
    }
  }
})

export const { setFocusedExpense, removeFocusFromExpense } = CommonSlice.actions;
export default CommonSlice.reducer;