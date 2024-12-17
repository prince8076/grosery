import React from 'react'
import { IoIosTimer } from "react-icons/io";

function ProductCardMobile({ product, handleAddProduct, handleDecreaseProduct, handleIncreaseProduct, productCounts }) {
    return (
        <>
            {/* Display "Out of Stock"*/}
            {/* {stock === 0 && (
                <div className="absolute inset-0 bg-[#ffffff97] flex items-center justify-center rounded-md z-10">
                    <span className="text-slate-100 text-sm font-semibold bg-[#000000b3] px-2 rounded-md">Out of Stock</span>
                </div>
            )} */}
            <div className="flex justify-center relative">
                {/* Display discount*/}
                {/* {discount > 0 && (
                    <div className="absolute top-0 left-0 w-8 h-8">
                        <img src="disc.svg" alt="Discount Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                        <div className="absolute top-0 left-0 w-full h-full text-white text-[10px] font-semibold px-2 flex flex-col items-center justify-center z-10">
                            <span>{discount || 'nan'}%</span>
                            <span>OFF</span>
                        </div>
                    </div>
                )} */}
                {/* Product Image */}
                <img
                    src={product.img || product.image_full_url || "/images/dummy_img.png"}
                    alt={product.name}
                    className="w-auto h-28 rounded-md align-middle object-cover"
                />
            </div>

            {/* Delivery Time */}
            <div className="flex gap-1 bg-pink-200 text-black text-[10px] rounded-md p-1 my-1 text-center w-fit">
                <div className="flex items-center">
                    <IoIosTimer />
                </div>
                <p>10 MINS</p>
            </div>

            {/* Product Name and unit */}
            <div className="inner flex flex-col flex-grow">
                <p className="text-sm text-[#000000CC] text-wrap overflow-hidden font-semibold w-auto h-5">
                    {product.name}
                </p>
                <p className="text-sm text-gray-500">{product.unit || "null"}</p>
            </div>

            {/* price and Add Product to cart*/}
            <div className="flex justify-between items-center mt-1">
                <p className="text-[#000000CC] text-sm font-semibold w-2/5 text-left">
                    ₹{product.price || "null"}
                </p>
                <div className="flex items-center justify-center">
                    {productCounts[product.id] ? (
                        <div className="flex items-center justify-center w-[60px] h-5 bg-[#96306f] rounded-lg px-2">
                            <button
                                className="cursor-pointer pl-2 w-5 h-5 text-[#FFFFFF] text-sm m-1"
                                onClick={(e) => handleDecreaseProduct(e)}
                            >
                                -
                            </button>
                            <span className="mx-2 text-[#FFFFFF] w-5 h-5 flex items-center justify-center text-sm">
                                {productCounts[product.id]}
                            </span>
                            <button
                                className="cursor-pointer pr-2 w-5 h-5  text-[#FFFFFF] text-sm m-1"
                                onClick={(e) => handleIncreaseProduct(e)}
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            className={`cursor-pointer flex items-center justify-center w-12 h-5 rounded-lg border border-[#8E0F5D] text-[#8E0F5D] hover:bg-custom-pink text-sm hover:${product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={(e) => handleAddProduct(e)}
                        // disabled={product.stock === 0}
                        >
                            ADD
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductCardMobile