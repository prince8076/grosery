import React from "react";
import { hideInfoPopup } from "../../../store/reducer/cartSlice";
import { useDispatch } from "react-redux";
function DeliveryChargePopup() {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-stone-900/70 z-50 flex items-end md:items-center justify-center"
      onClick={() => dispatch(hideInfoPopup())}
    >
      <div
        className="bg-white w-full md:w-[300px] h-40 rounded-t-xl md:rounded-lg md:absolute md:inset-auto md:bottom-auto md:h-auto md:rounded-lg shadow-lg md:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <h1 className="font-bold text-[14px]">Delivery Charges</h1>
          <div className="text-xs mt-3 flex flex-col gap-3">
            <h2>₹25 for orders below ₹99</h2>
            <h2>₹0 for orders above ₹99</h2>
          </div>
        </div>
        <hr />
        <div
          className="text-center h-full p-3 font-bold text-[14px] text-custom-purple cursor-pointer"
          onClick={() => dispatch(hideInfoPopup())}
        >
          Sounds good
        </div>
      </div>
    </div>
  );
}

export default DeliveryChargePopup;
