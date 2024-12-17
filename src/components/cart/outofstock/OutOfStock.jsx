import React from 'react'
import { useDispatch } from "react-redux";
import { generalActions } from "../../../store/reducer/generalSlice";

function OutOfStock({ count }) {
    const dispatch = useDispatch();
    return (
        <div className="w-full bg-red-100 rounded-lg flex justify-between items-center p-3">
            <h3 className="text-custom-purple text-sm sm:text-base font-bold">
                {count} {count > 1 ? 'items are' : 'item is'} out of stock...
                <span className="text-slate-500 text-xs font-normal">
                    <p>You can continue to checkout</p>
                </span>
            </h3>
            <button
                className="bg-custom-purple flex items-center justify-center text-white text-sm py-1 px-2 rounded-lg"
                onClick={() => dispatch(generalActions.setStockReview(true))}
            >
                Review
            </button>
        </div>
    );
}

export default OutOfStock;
