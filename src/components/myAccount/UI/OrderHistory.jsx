import React from "react";
import { NavLink } from "react-router-dom";

function OrderHistory({ ongoing }) {
  const date = new Date();
  return (
    <>
      <div className="flex justify-between items-center bg-gray-50 rounded-lg m-1 w-full sm:w-[95%]">
        <div className="flex flex-row justify-start w-[60%]">
          <div className="border flex justify-center rounded-lg bg-white w-[40px] sm:w-[70px] m-2 flex-shrink-0">
            <img
              src="/images/dummy_img.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start m-1">
            <p className="text-sm font-semibold text-[#000000CC]">
              Order #100102 (1 item)
            </p>
            {ongoing ? (
              <p className="text-red-600 text-sm font-medium">Pending</p>
            ) : (
              <p className="text-green-600 text-sm font-medium">Delivered</p>
            )}
            <p className="text-sm text-slate-500">sep 6,2024</p>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center m-2">
          <p className="text-sm font-semibold text-custom-purple p-2">Rs.870</p>
          {ongoing && (
            <NavLink to="/account/ordertaking">
              <button className="p-1 sm:p-2 border border-custom-purple rounded-lg text-xs text-custom-purple hover:bg-custom-pink hover:cursor-pointer">
                Track Order
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
