import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { generalActions } from "../../../store/reducer/generalSlice";

function CartEmpty() {
  const dispatch = useDispatch();

  return (
    <div className="cart_empty_container bg-[#EDF0F4] p-4 flex-grow">
      <div className="cart_empty_box  flex flex-col items-center gap-1 bg-white rounded-xl py-8">
        <img
          className="empty-image h-[100px] w-fit my-[50px]"
          src="/images/app/cart/cart_empty.png"
        />
        <p className="font-semibold tracking-wide">
          You don't have any items in your cart
        </p>
        <p className="font-light text-[14px] text-[#999999]">
          Your favourite items are just a click away
        </p>
        <Link
          to={"/"}
          className="bg-custom-purple text-white text-sm font-extralight px-6 py-3 rounded-lg shadow-md mt-4"
          onClick={() => {
            dispatch(generalActions.setCartState(false));
            dispatch(generalActions.setStockReview(false));
          }}
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
