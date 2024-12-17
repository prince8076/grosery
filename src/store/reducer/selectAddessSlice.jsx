import { createSlice, nanoid } from "@reduxjs/toolkit";
const center = {
  lat: 28.535517,
  lng: 77.391029,
};

// GET LOCALSTORAGE COORDINATES DATA
const { lat, lng } =
  localStorage.getItem("location") !== null
    ? JSON.parse(localStorage.getItem("location"))
    : center;
const { landmark } =
  localStorage.getItem("location") !== null &&
  JSON.parse(localStorage.getItem("location"));

// INITIALSTATE
const initialState = {
  id: "",
  locationType: "",
  name: "",
  address: landmark,
  houseNumber: "",
  floor: "",
  phoneNumber: "",
  pincode: null,
  DeliverTime: null,
  coordinates: { lat, lng },
  operation: "ADD",
  addressForm: false,
  newAddressPopup: false,
  changeLocation: false,
  isConfirm: false,
  productId: "",
};
const selectAddressSlice = createSlice({
  name: "address fields",
  initialState: initialState,
  reducers: {
    setAddress: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.locationType = action.payload;
      state.phoneNumber = action.payload.phoneNumber;
      state.houseNumber = action.payload.houseNumber;
      state.operation = action.payload.operation;
      state.pincode = action.payload.pincode;
    },
    assignSelectedAddress: (state, action) => {
      Object.assign(state, action.payload);
    },
    showNewAddressPopup: (state) => {
      state.newAddressPopup = true;
    },
    showAddressForm: (state) => {
      state.addressForm = true;
      state.id = nanoid();
    },
    showChangeLocation: (state) => {
      state.changeLocation = true;
    },
    setIsConfirm: (state, action) => {
      state.isConfirm = action.payload;
    },
    setProductid: (state, action) => {
      state.productId = action.payload;
    },

    clearAddressForm: (state) => {
      return {
        ...initialState,
        coordinates: center,
        addressForm: false,
        newAddressPopup: true,
      };
    },

    findDuration: (state, action) => {
      state.DeliverTime = action.payload;
    },
    handleBackButtom: (state) => {
      if (state.addressForm) {
        if (state.changeLocation) {
          // If the form and change location are both active, reset both
          state.changeLocation = false;
          state.addressForm = false;
        } else if (state.newAddressPopup) {
          // If the form and new address popup are both active, only hide the form
          state.addressForm = false;
          state.newAddressPopup = true;
        } else {
          // If only the form is active, reset the form state
          state.addressForm = false;
        }
      } else {
        if (state.operation === "EDIT") {
          // Reset state to initial values when editing
          Object.assign(state, {
            id: "",
            locationType: "",
            name: "",
            address: landmark,
            houseNumber: "",
            floor: "",
            phoneNumber: "",
            pincode: null,
            DeliverTime: null,
            coordinates: { lat, lng },
            operation: "ADD",
          });
        }
        if (state.newAddressPopup) {
          state.newAddressPopup = false;
        }
        if (state.changeLocation) {
          state.changeLocation = false;
        }
      }
    },
  },
});
console.log(selectAddressSlice.actions);

export default selectAddressSlice;
export const {
  setAddress,
  setIsConfirm,
  showNewAddressPopup,
  hideNewAddressPopup,
  showAddressForm,
  assignSelectedAddress,
  showChangeLocation,
  hideChangeLocation,
  clearAddressForm,
  findDuration,
  handleBackButtom,
  setProductid,
} = selectAddressSlice.actions;
