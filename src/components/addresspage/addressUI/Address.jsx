import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GoPencil } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { assignSelectedAddress } from "../../../store/reducer/selectAddessSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAddressForm,
  setIsConfirm,
  setProductid,
} from "../../../store/reducer/selectAddessSlice";
import { calculateDistance } from "../../../store/actions/addressActions";
import withReactContent from "sweetalert2-react-content";
function Address({ data }) {
  const dispatch = useDispatch();

  console.log(data);
  const onClickHandelUpdate = () => {
    dispatch(
      assignSelectedAddress({ ...data, addressForm: true, operation: "EDIT" })
    );
  };

  //ONCLICK DELETE ADDRESS FUNCTIONS
  // const mySwal = withReactContent(Swal);
  // const onClickDeleteModel = (id) => {
  //   mySwal
  //     .fire({
  //       title: (
  //         <p className="text-xs">Are you sure want to delete this address?</p>
  //       ),
  //       width: 350,
  //       showCancelButton: true,
  //       confirmButtonText: "Yes",
  //       cancelButtonText: "No",
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         dispatch(removeAddress(id));
  //       }
  //     });
  // };

  const onClickHandelLocation = () => {
    const { address, locationType } = data;
    const location = {
      landmark: address,
      lat: data.coordinates.lat,
      lng: data.coordinates.lng,
      tag: locationType,
    };
    localStorage.setItem("location", JSON.stringify(location));
    dispatch(calculateDistance(address));
    dispatch(clearAddressForm());
  };

  const handleConfirmRemove = (id) => {
    console.log(id);
    dispatch(setProductid(id));
    dispatch(setIsConfirm(true));
  };

  return (
    <>
      <div>
        <div className="bg-white px-3 py-2 rounded-lg mx-3 my-2 flex flex-col">
          <div
            className="cursor-pointer"
            onClick={() => onClickHandelLocation()}
          >
            <h1 className="font-bold" style={{ fontSize: "10px" }}>
              {data.locationType}
            </h1>
            <h1 style={{ fontSize: "10px" }} className="text-gray-400">
              {data.display_address}
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-1 z-10">
            <button
              className="border h-5 w-5 rounded-full p-1"
              onClick={onClickHandelUpdate}
            >
              <GoPencil style={{ fontSize: "9px", color: "#8E0F5D" }} />
            </button>

            <button
              className="border h-5 w-5 rounded-full p-1"
              onClick={() => handleConfirmRemove(data.id)}
            >
              <RiDeleteBin6Line style={{ fontSize: "9px", color: "#8E0F5D" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
