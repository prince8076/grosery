import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemContainer from "./CartItemContainer";
import {
  generalActions,
  generalSelector,
} from "../../store/reducer/generalSlice";
import { showNewAddressPopup } from "../../store/reducer/selectAddessSlice";
// import NewAddressCard from "../Address/NewAddressCard";
import AddressContainer from "../addresspage/AddressContainer";
import CartEmpty from "./CartUI/cartempty";
import OutOfStock from "./outofstock/OutOfStock";
import StockReview from "./outofstock/StockReview";
import TipsController from "./CartUI/TipsController";
import CartSummary from "./CartUI/CartSummary";

function CartPopup() {
  const { newAddressPopup } = useSelector((state) => state.selectAddressSlice);
  const { cartItems, stockReview } = useSelector(generalSelector);
  const [cartView, setCartView] = useState("main");
  console.log(newAddressPopup);
  const dispatch = useDispatch();
  const [outOfStockCount, setOutOfStockCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  {
    /* To show outofstock warning
  useEffect(() => {
    const count = cartItems.filter(item => item.product.stock == 0).length;
    setOutOfStockCount(count);
  }, [cartItems]);
  */
  }

  function handleClick() {
    setCartView("main");
    dispatch(generalActions.setStockReview(false));
  }

  return (
    <>
      <div className="cartpopup flex flex-col w-[434px] h-full bg-white ">
        <div className="cart_head_container flex justify-between  h-[70px] flex-shrink-0 flex-grow-0 items-center px-3">
          <p className="flex items-center gap-1">
            <img
              className="hover:cursor-pointer"
              src="/images/app/cart/back_arrow.png"
              onClick={handleClick}
              title="Go to previous"
            />
            <span className="font-semibold text-[20px]">My Cart</span>
          </p>
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              dispatch(generalActions.setCartState(false));
              dispatch(generalActions.setStockReview(false));
            }}
          >
            <img src="/images/app/cart/cross_icon.png" title="Close" />
          </button>
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="cart_body flex flex-col gap-5 px-5 py-5 bg-[#EDF0F4] overflow-y-scroll">
              {stockReview ? (
                <StockReview />
              ) : (
                <>
                  {/* To Show Out of Stock */}
                  {outOfStockCount > 0 && (
                    <OutOfStock count={outOfStockCount} />
                  )}

                  <div className="cart_items_container flex flex-col items-center flex-shrink-0">
                    {/* Cart items */}
                    <CartItemContainer />
                  </div>
                  <CartSummary />
                  <div className="rounded-lg">
                    <TipsController />
                  </div>
                  <div className="cancellation_policy max-h-[181px] bg-white rounded-2xl flex-shrink-0 py-5 px-8">
                    <h1 className="font-semibold mb-2">Cancellation Policy</h1>
                    <p className="text-sm tracking-wide">
                      Orders cannot be cancelled once packed for delivery. In
                      case of unexpected delays, a refund will be provided, if
                      applicable.
                    </p>
                  </div>
                </>
              )}
            </div>

            {!stockReview && (
              <div className="cart_footer flex justify-center items-center py-5 flex-shrink-0 flex-grow-0">
                <button
                  className="pay_btn bg-custom-purple text-white rounded-2xl w-11/12 py-2"
                  onClick={() => {
                    // dispatch(generalActions.removeOutOfStockItems());
                    dispatch(showNewAddressPopup());
                  }}
                >
                  <p className="text-lg font-semibold -mb-1">Proceed To Pay</p>
                  <p className="text-sm">₹65 (Total)</p>
                </button>
              </div>
            )}
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
      {newAddressPopup && <AddressContainer />}
    </>
  );
}

export default CartPopup;
