import { configureStore } from "@reduxjs/toolkit";
import selectAddressSlice from "../reducer/selectAddessSlice";
import addressSlice from "../reducer/addressSlice";
import { generalReducer } from "../reducer/generalSlice";
import mainCategorySlice from "../reducer/mainCategorySlice";
import cartSlice from "../reducer/cartSlice";
const store = configureStore({
  reducer: {
    selectAddressSlice: selectAddressSlice.reducer,
    addressSlice: addressSlice.reducer,
    mainCategorySlice: mainCategorySlice.reducer,
    generalReducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
