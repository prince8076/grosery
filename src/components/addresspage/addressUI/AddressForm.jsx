import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import SaveAddressAs from "./SaveAddressAs";
import { useDispatch, useSelector } from "react-redux";
import {
  assignSelectedAddress,
  clearAddressForm,
  handleBackButtom,
} from "../../../store/reducer/selectAddessSlice";
import {
  addNewAddress,
  updateAddress,
} from "../../../store/reducer/addressSlice";

// component
function AddressForm({ location }) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    houseNumber,
    floor,
    phoneNumber,
    address,
    landmark,
    pincode,
    locationType,
    coordinates,
    operation,
  } = useSelector((state) => state.selectAddressSlice);

  // onchange form Event
  const onChangeHouse = (e) => {
    dispatch(assignSelectedAddress({ houseNumber: e.target.value }));
  };
  const onChangeName = (e) => {
    dispatch(assignSelectedAddress({ name: e.target.value }));
  };
  const onChangeFloor = (e) => {
    dispatch(assignSelectedAddress({ floor: e.target.value }));
  };
  const onChangeLandmark = (e) => {
    dispatch(assignSelectedAddress({ landmark: e.target.value }));
  };

  const onChangeNumber = (e) => {
    dispatch(assignSelectedAddress({ phoneNumber: e.target.value }));
  };

  // Adding new Address
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      id,
      name,
      houseNumber,
      floor,
      phoneNumber,
      address,
      locationType,
      coordinates,
      pincode,
      display_address: `${name},${houseNumber},${address}`,
    };
    operation === "EDIT"
      ? dispatch(updateAddress({ newAddress, id }))
      : dispatch(addNewAddress(newAddress));
    dispatch(clearAddressForm());
  };
  return (
    <div className={`w-full md:w-[50%] md:flex  flex-col h-full`}>
      <div className="flex items-center gap-3 h-[8%] p-3">
        <BsArrowLeft
          className="cursor-pointer"
          onClick={() => dispatch(handleBackButtom())}
        />
        <h1 className="font-bold">Enter your Complete Address</h1>
      </div>
      <hr />
      <form
        autoComplete="off"
        className="p-3 flex flex-col h-[92%] text-xs "
        onSubmit={handleSubmit}
      >
        <div className="flex h-auto flex-col gap-3 overflow-auto overflow-y-scroll no-scrollbar  my-5">
          {/* LOCATION TYPE COMPONENTS */}
          <SaveAddressAs />
          <input
            type="text"
            value={houseNumber}
            placeholder="Flate/House no/ Building name*"
            className="h-10 w-full border border-1 rounded-lg p-4 outline-none focus:border-blue-500"
            required
            onChange={onChangeHouse}
          />

          <input
            type="text"
            value={floor}
            placeholder="Floor (Optional)"
            onChange={onChangeFloor}
            className="h-10 w-full border border-1 rounded-lg p-4 outline-none focus:border-blue-500"
          />
          <div className="px-2 bg-gray-100 rounded-lg">
            <h1 className="text-sm text-gray-400">Area / Sector / Locality*</h1>
            <textarea
              value={address}
              disabled
              className="w-full h-10 bg-gray-100 outline-none resize-none overflow-auto"
              required
            ></textarea>
          </div>

          <input
            type="text"
            placeholder="Nearby Landmark (Optional)"
            value={landmark}
            className="h-10 w-full border border-1 rounded-lg p-4 outline-none focus:border-blue-500"
            onChange={onChangeLandmark}
          />
          <input
            type="text"
            value={name}
            placeholder="Enter Name*"
            className="h-10 w-full border border-1 rounded-lg p-4 outline-none focus:border-blue-500"
            onChange={onChangeName}
            required
          />
          <input
            type="text"
            value={phoneNumber}
            placeholder="Your phone number(Optional)"
            onChange={onChangeNumber}
            className="h-10 w-full border border-1 rounded-lg p-4 outline-none focus:border-blue-500"
          />
        </div>
        <div
          className="h-16 w-full flex  items-center justify-center text-white rounded-lg"
          style={{ backgroundColor: "#8E0F5D" }}
        >
          <button className="px-5">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
