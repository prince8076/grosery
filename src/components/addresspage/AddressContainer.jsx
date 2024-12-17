import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import AddNewAddress from "./addressUI/AddNewAddress";
import { useDispatch, useSelector } from "react-redux";
import NewAddressCard from "./NewAddressCard";
import Address from "./addressUI/Address";
import ConfirmPopup from "../UI/ConfirmPopup";
import {
  hideNewAddressPopup,
  handleBackButtom,
} from "../../store/reducer/selectAddessSlice";
function AddressContainer() {
  const dispatch = useDispatch();
  const { addressForm, isConfirm } = useSelector(
    (state) => state.selectAddressSlice
  );
  const { allAddress } = useSelector((state) => state.addressSlice);

  return (
    <>
      <div
        className={`fixed  md:flex z-40 inset-0 bg-stone-900/60 md:flex md:items-center md:justify-center`}
        onClick={() => dispatch(handleBackButtom())}
      >
        <div
          className="bg-gray-200 fixed  bottom-0 h-[50%] w-full md:absolute md:top-0 md:right-0 md:w-[300px] md:h-full rounded-t-lg transition duration-200 ease-in-out transform bottom-0 transition-transform duration-200 ease-in-out translate-y-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="hidden border text-left md:flex p-3 bg-white items-center gap-4 font-bold">
            <div className="" onClick={() => dispatch(handleBackButtom())}>
              <BsArrowLeft style={{ fontWeight: "900", fontSize: "20px" }} />
            </div>
            <div className="w-full text-xs">Confirm map pin location</div>
          </div>

          <div className="border  bg-white mt-5 p-3 rounded-lg  cursor-pointer mx-3">
            <AddNewAddress />
          </div>
          <div className="my-1">
            <span className="text-gray-500 p-3 text-xs">
              your saved address
            </span>
          </div>
          {allAddress.length > 0 &&
            allAddress.map((data, index) => (
              <Address key={index} data={data} />
            ))}
        </div>
      </div>
      {addressForm && <NewAddressCard />}
      {isConfirm && <ConfirmPopup />}
    </>
  );
}

export default AddressContainer;
