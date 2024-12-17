import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { generalActions } from "../../../store/reducer/generalSlice";

function CartItem({ name, id, imageUrl, price, quantity, stock }) {
  const dispatch = useDispatch();

  const onClickDecrease = () => {
    // setCounter(counter - 1);
    dispatch(generalActions.decCart(id));
  };

  const onClickIncrease = () => {
    //setCounter(counter + 1);
    dispatch(generalActions.incCart(id));
  };
  return (
    <div className="relative bg-white rounded-lg flex items-center justify-between mx-3 px-1 my-2">
      {/* To show outofstock */}
      {(stock == 0 || stock < quantity) && (
        <div className="absolute w-full inset-0 bg-[#80808084] backdrop-blur-1 flex items-center justify-center rounded-xl z-10">
          <span className="text-slate-100 text-sm font-semibold bg-[#0000008d] px-2 rounded-md">
            Out of Stock
          </span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="border flex justify-center rounded-lg bg-white w-[90px] flex-shrink-0">
          <img
            src={imageUrl || "/images/dummy_img.png"}
            alt={name}
            className="w-fit h-fit"
          />
        </div>
        <div className="flex flex-col text-[12px] text-wrap text-gray-600 px-1">
          <p>{name}</p>
          <div>
            <p>{quantity}</p>
            <p className="font-bold mt-2 text-[11px]">
              {(price * quantity)}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-custom-purple flex items-center justify-evenly text-white text-sm py-1 px-2 rounded-lg">
        <button className="w-5" onClick={onClickDecrease}>
          -
        </button>
        <span className="w-5 text-center">{quantity}</span>
        <button className="w-5" onClick={onClickIncrease}>
          +
        </button>
      </div>
    </div>

  );
}

export default CartItem;
