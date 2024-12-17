import React from "react";
import { hideInfoPopup } from "../../../store/reducer/cartSlice";
import { useDispatch } from "react-redux";
function HandleChargePopup() {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-stone-900/70 z-50 flex items-end md:items-center justify-center"
      onClick={() => dispatch(hideInfoPopup())}
    >
      <div
        className="bg-white w-full md:w-auto h-40 rounded-t-xl md:rounded-lg md:absolute md:inset-auto md:bottom-auto md:h-auto md:rounded-lg shadow-lg md:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <h1 className="font-bold text-[14px]">Handling charge</h1>
          <div className="text-xs mt-3 flex flex-col gap-3">
            <h2>
              For proper handling and ensuring high quality quick-deliveries
            </h2>
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

export default HandleChargePopup;
