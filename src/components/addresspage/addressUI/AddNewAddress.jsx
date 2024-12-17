import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { showAddressForm } from "../../../store/reducer/selectAddessSlice";
function AddNewAddress() {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center gap-2"
      onClick={() => dispatch(showAddressForm())}
    >
      <MdAdd style={{ color: "#8E0F5D", fontWeight: "700" }} />

      <h1 style={{ color: "#8E0F5D", fontSize: "14px", fontWeight: "500" }}>
        Add a new address
      </h1>
    </div>
  );
}

export default AddNewAddress;
