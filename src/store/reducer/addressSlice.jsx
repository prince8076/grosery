import { createSlice } from "@reduxjs/toolkit";

const getAddress =
  localStorage.getItem("address") !== null
    ? JSON.parse(localStorage.getItem("address"))
    : [];

// METHOD FOR SAVE ADDRESS IN LOCALADDRESS
const setAddress = (address) => {
  localStorage.setItem("address", JSON.stringify(address));
};

//INITIALSTATE
const initialState = { selectedAddress: {}, allAddress: getAddress };

const addressSlice = createSlice({
  name: "All addresses",
  initialState,
  reducers: {
    addNewAddress: (state, action) => {
      state.allAddress.push(action.payload);
      setAddress(state.allAddress);
    },
    removeAddress: (state, action) => {
      state.allAddress = state.allAddress.filter(
        (address) => address.id !== action.payload
      );
      setAddress(state.allAddress);
    },

    updateAddress: (state, action) => {
      const { id, newAddress } = action.payload;
      const newDetails = state.allAddress.map((address) =>
        address.id === id ? { ...address, ...newAddress } : address
      );
      setAddress(newDetails);
    },
  },
});

export default addressSlice;

export const { addNewAddress, removeAddress, updateAddress } =
  addressSlice.actions;
