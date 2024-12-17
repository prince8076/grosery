import { createSlice } from "@reduxjs/toolkit";
import { setMainCategoryAction } from "../actions/mainCategoryAction";

const mainCategorySlice = createSlice({
  name: "Main Category storege",
  initialState: [],
  reducers: {
    setMainCategory: (state, action) => {
      return action.payload;
    },
  },
});
export default mainCategorySlice;
export const { setMainCategory } = mainCategorySlice.actions;
