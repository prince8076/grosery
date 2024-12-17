import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generalSelector, generalActions } from '../../../store/reducer/generalSlice';



function StockReview() {
    const { cartItems } = useSelector(generalSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className='w-full text-lg text-center text-[#000000c2] p-2 font-semibold'>Out Of Stock Products</h1>
            {cartItems.filter(item => item.product.storage.length == 0).map((item) => (
                <div
                    key={item.product.id}
                    className="w-full bg-white rounded-lg flex items-center justify-between gap-1 mb-4 p-2"
                >
                    <div className="flex items-center gap-2 w-4/5">
                        <div className="border flex justify-center rounded-lg bg-white w-[90px] flex-shrink-0">
                            <img
                                src={item.product.image_full_url || "/images/dummy_img.png"}
                                alt={item.product.name}
                                className="w-fit h-fit"
                            />
                        </div>
                        <div className="flex flex-col text-sm text-wrap text-[#000000CC] px-1">
                            <p className='font-medium'>{item.product.name}</p>
                            <div>
                                <p>{item.quantity}</p>
                                <p className="font-bold mt-1 text-[11px]">
                                    {item.product.price * item.quantity || "null"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-1/5 bg-custom-purple flex items-center justify-center text-white text-sm py-1 px-2 rounded-lg"
                        onClick={() => dispatch(generalActions.removecart(item))}
                        title='remove product'
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>

    )
}

export default StockReview;