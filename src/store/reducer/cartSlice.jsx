import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipsAmount: 0,
  isCustom: false,
  handleChargePopup: false,
  deliverChargePopup: false,
};

const cartSlice = createSlice({
  name: "Tips",
  initialState,

  reducers: {
    setTipsAmount: (state, action) => {
      state.tipsAmount = action.payload;
    },
    removeTipsAmount: (state) => {
      state.tipsAmount = 0;
    },
    showCustom: (state) => {
      state.isCustom = true;
    },
    handleChargeShow: (state) => {
      state.handleChargePopup = true;
    },
    deliverChargeShow: (state) => {
      state.deliverChargePopup = true;
    },
    hideInfoPopup: (state) => {
      state.deliverChargePopup = false;
      state.handleChargePopup = false;
    },

    hideCustom: (state) => {
      state.isCustom = false;
    },
  },
});

export default cartSlice;
export const {
  hideCustom,
  showCustom,
  setTipsAmount,
  removeTipsAmount,
  handleChargeShow,
  deliverChargeShow,
  hideInfoPopup,
} = cartSlice.actions;
