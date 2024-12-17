import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsConfirm } from "../../store/reducer/selectAddessSlice";
import { removeAddress } from "../../store/reducer/addressSlice";
function ConfirmPopup() {
  const { productId } = useSelector((state) => state.selectAddressSlice);
  const dispatch = useDispatch();

  const onclickRemoveProduct = () => {
    dispatch(removeAddress(productId));
    dispatch(setIsConfirm(false));
  };
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center ">
      <div className="bg-white w-[300px] h-40 rounded-lg flex flex-col">
        <div className="p-5">
          <p>Are you sure you want to delete this address?</p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-auto p-5">
          <button className="" onClick={() => dispatch(setIsConfirm(false))}>
            NO
          </button>
          <button className="text-red-500" onClick={onclickRemoveProduct}>
            YES
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
