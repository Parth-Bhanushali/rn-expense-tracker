import { createSlice } from "@reduxjs/toolkit";
import { dummyExpenseList } from "../constants/dummy";

export const CommonSlice = createSlice({
  name: "common",
  initialState: {
    focusedExpense: null,
    allExpenses: dummyExpenseList
  },
  reducers: {
    setFocusedExpense: (state, action) => {
      state.focusedExpense = action.payload
    },
    removeFocusFromExpense: (state, action) => {
      state.focusedExpense = null
    },
    removeExpense: (state, action) => {
      const toRemove = action.payload.index
      state = {...state, allExpenses: state.allExpenses.splice(toRemove, 1)}
    },
    updateExpense: (state, action) => {
      const changeAt = action.payload.index
      const updatedVal = action.payload.modifiedExpense

      const updatedExpenses = [...state.allExpenses]
      updatedExpenses[changeAt] = updatedVal

      state.allExpenses = updatedExpenses
    }
  }
})

export const { setFocusedExpense, removeFocusFromExpense, removeExpense, updateExpense } = CommonSlice.actions;
export default CommonSlice.reducer;