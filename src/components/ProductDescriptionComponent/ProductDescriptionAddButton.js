import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generalActions,
  generalSelector,
} from "../../store/reducer/generalSlice";

function ProductDescriptionAddButton({ cartData, gorcedata, name }) {
  const dispatch = useDispatch();
  const { cartItems, currentProduct } = useSelector(generalSelector);
  const [increaseDecreasebutton, useincreaseDecreasebutton] = useState(0);
  const [totalItem, usetotalItem] = useState(0);

  useEffect(() => {
    if (currentProduct) {
      let existingItem = null;
      if (cartItems.length > 0) {
        existingItem = cartItems.find(
          (item) => item.product.id === currentProduct.id
        );
      }
      if (existingItem) {
        usetotalItem(existingItem.quantity);
      } else {
        usetotalItem(0);
      }
    }
  }, [cartItems]);

  function increaseItem() {
    //usetotalItem(totalItem+1);
    dispatch(generalActions.incCart(currentProduct.id));
  }

  function decreaseItem() {
    //usetotalItem(totalItem-1);
    dispatch(generalActions.decCart(currentProduct.id));
  }

  return (
    <div className="border-l border-[#00000026] border-solid p-2 lg:w-[500px] xl:w-[600px] ">
      <div className="text-[10px] font-[400] text-left my-2 lg:px-2">
        {name || cartData.text}
      </div>

      <div className="text-sm font-[500] lg:px-2">{name || cartData.title}</div>

      <hr className="border my-4 lg:px-2" />

      <div className="flex flex-row justify-between lg:px-2">
        <div className="flex flex-col">
          {/* <div className="text-[12px] lg:px-2">{cartData.quantity}</div> */}
          <div className="flex flex-row gap-5 flex-wrap">
            <div className=" border-[0.8px] rounded-[9px] border-[#8E0F5D] border-solid flex flex-col items-center w-[90px] hover:cursor-pointer hover:scale-110 ">
              <div className="text-[10px] text-white bg-[#8E0F5D] px-2">
                {cartData.off} OFF
              </div>
              <div className="text-[12px] lg:px-2">{cartData.quantity}</div>
              <div>
                <span className=" font-[600] text-[14px]">
                  ₹{cartData.price}{" "}
                </span>
                <span className="text-[10px] font-[400] line-through ">
                  ₹{cartData.actualPrice}{" "}
                </span>
              </div>
            </div>

            <div className=" border-[0.8px] rounded-[9px] border-[#8E0F5D] border-solid flex flex-col items-center w-[90px] hover:cursor-pointer hover:scale-110 ">
              <div className="text-[10px] text-white bg-[#8E0F5D] px-2">
                {cartData.off} OFF
              </div>
              <div className="text-[12px] lg:px-2">0.5Kg</div>
              <div>
                <span className=" font-[600] text-[14px]">
                  ₹{cartData.price / 2}{" "}
                </span>
                <span className="text-[10px] font-[400] line-through ">
                  ₹{cartData.actualPrice / 2}{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="my-4">
            <div className="text-[12px] lg:px-2">{cartData.quantity}</div>
            <span className=" font-[600] text-[22px]">₹{cartData.price} </span>
            <span className="text-[13px] font-[500] ">MRP </span>
            <span className="text-[12px] font-[400] line-through ">
              ₹{cartData.actualPrice}{" "}
            </span>
            <span className="text-[9px] font-[400] leading-[15.75px] text-left lg:px-2">
              ({cartData.off} OFF)
            </span>
            <div>
              <span className="text-[12px] font-[400] lg:px-2">
                (Inclusive of all taxes)
              </span>
            </div>
          </div>

          <div>
            <span className="text-[12px] font-[400] leading-[15.75px] text-left bg-[#FFDFEF] px-4 py-1">
              {cartData.time} Mins
            </span>
          </div>
        </div>

        {totalItem === 0 && (
          <button
            className="w-[67px] h-[28px] text-[12px] rounded-[10px] border border-solid border-[#8E0F5D] text-[#8E0F5D] lg:px-2 "
            onClick={() =>
              dispatch(
                generalActions.addtocart({
                  product: currentProduct,
                  quantity: 1,
                })
              )
            }
          >
            ADD
          </button>
        )}

        {totalItem >= 1 && (
          <div className="w-[67px] h-[28px] text-[12px] rounded-[10px] border border-solid border-[#8E0F5D] bg-[#8E0F5D] text-[white] lg:px-2 flex flex-row justify-evenly items-center">
            <button onClick={decreaseItem}>-</button>
            <div>{totalItem}</div>
            <button onClick={increaseItem}>+</button>
          </div>
        )}
      </div>

      <div className="  text-[16px] font-[500] mt-6 mb-2 lg:px-2 text-[#8E0F5D] hover:cursor-pointer">
        View all by AppleBrand
      </div>

      <div className="  text-[18px] font-[500] mt-6 mb-2 lg:px-2">
        Why shop from GroceKart?
      </div>

      <div className="flex flex-col gap-6 lg:px-2">
        {gorcedata.map((data, index) => {
          return (
            <div className="flex gap-[21px] lg:px-2">
              <img
                src={data.link}
                alt=""
                className="w-[50px] h-[50px] gap-[0px] rounded-[10%] "
              />

              <div className="text-[12px] font-[500] ">
                <div>{data.title}</div>
                <span className="text-[10px] font-[400] ">{data.des}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDescriptionAddButton;
