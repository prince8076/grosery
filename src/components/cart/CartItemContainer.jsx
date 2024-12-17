import React from "react";
import CartItem from "./CartUI/CartItem";
import { useSelector } from "react-redux";
import { generalSelector } from "../../store/reducer/generalSlice";

function CartItemContainer() {
  const { cartItems } = useSelector(generalSelector);
  return (
    <div className="w-full rounded-lg flex flex-col gap-2 bg-white p-2">
      {cartItems.map((item) => (
        <CartItem
          id={item.product.id}
          name={item.product.name}
          imageUrl={item.product.image_full_url}
          quantity={item.quantity}
          price={item.price}
          // stock={item.product.stock}
        />
      ))}
    </div>
  );
}

export default CartItemContainer;
