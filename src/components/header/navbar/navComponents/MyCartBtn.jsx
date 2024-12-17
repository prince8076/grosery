import { useDispatch, useSelector } from "react-redux";
import { generalActions, generalSelector } from "../../../../store/reducer/generalSlice";




// MyCart btn
function MyCartBtn(){
    const dispatch = useDispatch();
    const { windowWidth, cartItemsCount } = useSelector(generalSelector);
  
    const CartIcon = () => (
      <img
        className="cart_icon h-[17px] md:h-4/6"
        src="/images/app/navbar/ph_shopping-cart.png"
        alt="Cart icon"
      />
    );
  
    const CartItemBadge = () =>
      cartItemsCount > 0 && (
        <p
          className="cart_badge rounded-full w-[25px] px-[4px] ring-1 ring-yellow-300 bg-red-600 text-center text-[10px]
          text-white absolute -top-2 -right-2"
        >
          {cartItemsCount}
        </p>
      );
  
    const CartItem = () => (
      <div className="cart_items flex-col justify-center gap-0 p-1">
        <p
          className={`${
            cartItemsCount > 99 ? "max-w-20" : "max-w-16"
          }  leading-3 text-[9px] sm:text-[10px] md:text-sm`}
        >
          {cartItemsCount} Item{cartItemsCount > 1 ? "s" : ""} <br /> Added
        </p>
      </div>
    );
  
    const CartText = () => (
      <p className="cart_text text-xs md:text-lg md:pr-1 font-normal">My Cart </p>
    );
  
    const handleCartbtn = () => {
      dispatch(generalActions.setCartState(true));
    };
  
    return (
      <button
        className={`cart_btn_container ${
          windowWidth <= 640 ? "ms-auto rounded-lg" : "rounded-[10px]"
        } h-[35px] md:h-custom-57
         bg-custom-purple border   px-2 py-1 gap-1 text-white flex items-center flex-shrink-0 text-lg relative border-1 border-custom-purple `}
        onClick={() => handleCartbtn()}
      >
        <CartIcon />
        {windowWidth >= 0 ? (
          cartItemsCount > 0 ? (
            <CartItem />
          ) : (
            <CartText />
          )
        ) : (
          <>
            <CartItemBadge />
            <CartText />
          </>
        )}
      </button>
    );
  }

  export default MyCartBtn;