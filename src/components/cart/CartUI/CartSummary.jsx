import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { GiScooter, GiShoppingBag } from "react-icons/gi";
import { RiContactsBook3Fill } from "react-icons/ri";
import DeliveryChargePopup from "../InfoPopup/DeliveryChargePopup";
import HandleChargePopup from "../InfoPopup/HandleChargePopup";
import {
  handleChargeShow,
  deliverChargeShow,
} from "../../../store/reducer/cartSlice";
import {
  generalActions,
  generalSelector,
} from "../../../store/reducer/generalSlice";

function CartSummary() {
  const dispatch = useDispatch();

  const { tipsAmount, handleChargePopup, deliverChargePopup } = useSelector(
    (state) => state.cartSlice
  );
  const { cartItems } = useSelector(generalSelector);

  const freeDeliveryThreshold = 100;

  const totalCartAmount =
    cartItems?.reduce((total, item) => total + item.price * item.quantity, 0) ||
    0;
  const amountForFreeDelivery = freeDeliveryThreshold - totalCartAmount;
  const deliveryCharge = totalCartAmount >= freeDeliveryThreshold ? 0 : 20;
  const handlingCharge = 5;
  const grandTotal =
    totalCartAmount + deliveryCharge + handlingCharge + tipsAmount;

  const toggleDeliveryPopup = () => {
    dispatch(deliverChargeShow());
  };

  const toggleHandlePopup = () => {
    dispatch(handleChargeShow());
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="p-3">
          <h1 className="font-semibold text-[12px] mb-3">Billing Details</h1>
          <div className="flex items-center justify-between text-xs">
            <div className="left-side flex flex-col gap-1 w-full">
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-1">
                  <RiContactsBook3Fill className="text-[15px] font-extrabold" />
                  <span>Items Total</span>
                </div>
                <div>
                  <span>₹{totalCartAmount}</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  <GiScooter className="text-[15px] font-extrabold" />
                  <p>Delivery Charges</p>
                  <BsInfoCircle
                    className="cursor-pointer"
                    onClick={toggleDeliveryPopup}
                  />
                </div>
                <div>
                  {deliveryCharge === 0 ? (
                    <>
                      <span className="line-through text-gray-500">₹20</span>
                      <span className="bg-custom-purple text-white px-2 py-1 ml-2 rounded">Free</span>
                    </>
                  ) : (
                    <span>₹{deliveryCharge}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h1 className="flex items-center gap-1">
                  <GiShoppingBag className="text-[15px]" />
                  <p>Handling Charges</p>
                  <BsInfoCircle
                    className="cursor-pointer"
                    onClick={toggleHandlePopup}
                  />
                </h1>
                <h1>₹{handlingCharge}</h1>
              </div>
              {tipsAmount > 0 && (
                <div className="flex items-center justify-between gap-4">
                  <h1 className="flex items-center gap-1">
                    <FaUser className="text-[15px]" />
                    <p>Tip for your delivery partner</p>
                  </h1>
                  <h1>₹{tipsAmount}</h1>
                </div>
              )}
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex items-center justify-between font-semibold">
            <h1 className="font-semibold text-[12px]">Grand Total</h1>
            <h1>₹{grandTotal}</h1>
          </div>
        </div>
        <div className="offer bg-custom-purple text-center py-5 rounded-b-xl">
          {amountForFreeDelivery > 0 && (
            <p className="text-white text-[10px]">
              Shop for ₹{amountForFreeDelivery} more to save ₹20 on your
              delivery charge
            </p>
          )}
        </div>
      </div>
      {deliverChargePopup && <DeliveryChargePopup />}
      {handleChargePopup && <HandleChargePopup />}
    </>
  );
}

export default CartSummary;
