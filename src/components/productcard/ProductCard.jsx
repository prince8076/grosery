import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  generalActions,
  generalSelector,
} from "../../store/reducer/generalSlice";
import { useNavigate } from "react-router-dom";
import ProductCardMobile from "./ProductCardMobile";

function ProductCard({ product }) {
  const { windowWidth, cartItems } = useSelector(generalSelector);
  const [productCounts, setProductCounts] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    setProductCounts({
      [product.id]: existingItem ? existingItem.quantity : 0,
    });
  }, [cartItems, product.id]);


  const handleAddProduct = (e) => {
    e.stopPropagation();
    dispatch(generalActions.addtocart({ product, quantity: 1, price: 30 }));
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1,
    }));
  };

  const handleIncreaseProduct = (e) => {
    e.stopPropagation();
    dispatch(generalActions.incCart(product.id));
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: prevCounts[product.id] + 1,
    }));
  };

  const handleDecreaseProduct = (e) => {
    e.stopPropagation();
    setProductCounts((prevCounts) => {
      const currentCount = prevCounts[product.id] || 0;
      if (currentCount > 0) {
        dispatch(generalActions.decCart(product.id));
        return { ...prevCounts, [product.id]: currentCount - 1 };
      }
      return prevCounts;
    });
  };

  const handleProductDescription = () => {
    dispatch(generalActions.setCurrentProduct(product));
    navigate(
      `/productdescription/pn/${product.name.replace(/ /g, "-")}/pid/${
        product.id
      }`
    );
  };

  return (
    <div
      className="bg-white w-auto relative text-left shadow-lg ring-1 ring-gray-200 hover:cursor-pointer rounded-md p-2"
      key={product.id}
      onClick={handleProductDescription}
    >
      {windowWidth > 600 ? (
        <>
          {/* Display discount */}
          {product.discount > 0 && (
            <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10">
              <img
                src="disc.svg"
                alt="Discount Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute top-0 left-0 w-full h-full text-white text-xs font-semibold px-2 py-1 flex flex-col items-center justify-center z-10">
                <span>{product.discount}%</span>
                <span>OFF</span>
              </div>
            </div>
          )}

          {/* Display "Out of Stock" */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-[#FFFFFF99] flex items-center justify-center rounded-md">
              <span className="text-white font-semibold bg-[#000000C2] px-2 rounded-md">
                Out of Stock
              </span>
            </div>
          )}

          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={
                product.img || product.image_full_url || "/images/dummy_img.png"
              }
              alt={product.name}
              className="w-4/5 h-32 align-middle object-cover"
            />
          </div>

          {/* Delivery Time */}
          <div className="bg-pink-200 text-black text-xs py-1 text-center mt-2 w-auto max-w-[130px]">
            <p>Delivery in 10 mins</p>
          </div>


          {/* Product Name and Price */}
          <div className="inner flex flex-col flex-grow mt-2">
            <p
              className={`text-base sm:text-md text-[#000000CC] text-wrap overflow-hidden font-semibold h-12 ${
                windowWidth < 384
                  ? "text-sm font-semibold text-[#000000CC]"
                  : ""
              }`}
            >
              {product.name}
            </p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-gray-500">{product.unit || "null"}</p>
              <p className="text-[#000000CC] font-semibold w-2/5 text-right">
                ₹{product.price || 30}
              </p>
            </div>

            {/* Add Product to cart */}
            <div className="flex items-center justify-start mt-2">
              {productCounts[product.id] ? (
                <div className="flex items-center justify-center w-[60px] h-[20px] sm:w-[48px] sm:h-[20px] md:w-[70px] md:h-[30px] bg-[#96306f] rounded-lg px-2 md:p-0">
                  <button
                    className="cursor-pointer pl-2 w-[20px] sm:w-[20px] md:w-[35px] text-[#FFFFFF] text-[14px] sm:text-[11px] md:text-[14px] m-1 md:m-0"
                    onClick={handleDecreaseProduct}
                  >
                    -
                  </button>
                  <span className="mx-2 text-[#FFFFFF] w-[20px] sm:w-[20px] md:w-[35px] flex items-center justify-center text-[12px] sm:text-[9px] md:text-[14px]">
                    {productCounts[product.id]}
                  </span>
                  <button
                    className="cursor-pointer pr-2 w-[20px] sm:w-[20px] md:w-[35px] text-[#FFFFFF] text-[14px] sm:text-[11px] md:text-[14px] m-1 md:m-0"
                    onClick={handleIncreaseProduct}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className={`cursor-pointer flex items-center justify-center w-[48px] h-[20px] sm:w-[31px] sm:h-[17px] md:w-[70px] md:h-[30px] rounded-lg border border-[#8E0F5D] text-[#8E0F5D] hover:bg-custom-pink text-[10px] sm:text-[8px] md:text-[14px] ${
                    product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleAddProduct}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <ProductCardMobile
          product={product}
          handleAddProduct={handleAddProduct}
          handleDecreaseProduct={handleDecreaseProduct}
          handleIncreaseProduct={handleIncreaseProduct}
          productCounts={productCounts}
        />
      )}
    </div>
  );
}

export default ProductCard;
