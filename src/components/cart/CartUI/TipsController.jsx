import React, { useState } from "react";
import {
  setTipsAmount,
  removeTipsAmount,
  showCustom,
  hideCustom,
} from "../../../store/reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UI/Loader";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotLoader from "../../UI/ThreeDotLoader";

function TipsController() {
  const { tipsAmount, isCustom } = useSelector((state) => state.cartSlice);
  const [customTip, setCustomTip] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleTipsAmount = async (tips) => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      dispatch(setTipsAmount(tips));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  // ADD CUSTOM TIPPS
  const handleChange = (e) => {
    const tip = Number(e.target.value);
    if (tip < 10) {
      setError("Tips should be gratter than ₹10");
    }
    if (tip >= 10) {
      setError("");
    }
    setCustomTip(tip);
  };

  const handleCustomTip = () => {
    setLoading(true);
    const tip = customTip ? Number(customTip) : 0;
    const timeoutId = setTimeout(() => {
      dispatch(setTipsAmount(tip));
      dispatch(hideCustom());
      setCustomTip("");

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  //CLEAR TIPS AMOUNT

  const handleClearTips = () => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      dispatch(removeTipsAmount());
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="bg-white p-3 rounded-lg">
      {loading ? (
        <div className="h-[116px] flex items-center justify-center">
          <ThreeDotLoader />
        </div>
      ) : (
        <div className="flex flex-col gap-3 bg-white  gap-2 ">
          <div className="flex">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Tip your delivery partner</h2>
              <p className="text-xs text-gray-500 leading-3">
                Your kindness means a lot! 100% of your tip will go directly to
                your delivery partner.
              </p>
            </div>
            {tipsAmount > 0 && (
              <div className="flex flex-col items-center  text-xs px-3">
                <p>₹{tipsAmount}</p>
                <button
                  className="p-0 text-custom-purple"
                  onClick={handleClearTips}
                >
                  clear
                </button>
              </div>
            )}
          </div>
          {!isCustom ? (
            <>
              <div className="cart_tips text-[13px] font-semibold text-gray-700 flex items-center justify-between w-full">
                <div
                  className={`${
                    tipsAmount === 10 &&
                    "border-custom-purple bg-custom-purple/10"
                  } border flex items-center justify-center gap-1  rounded-lg cursor-pointer h-12 items-center`}
                  onClick={() => handleTipsAmount(10)}
                >
                  <div className="flex items-center justify-center gap-1 px-3 ">
                    <img
                      src="https://em-content.zobj.net/source/apple/391/grinning-face-with-smiling-eyes_1f604.png"
                      alt="grinning-face-with-smiling-eyes_1f604.png"
                      className="h-[20px]"
                    />
                    <h1>₹10</h1>
                  </div>
                </div>
                <div
                  className={`${
                    tipsAmount === 30 &&
                    "border-custom-purple bg-custom-purple/10"
                  } border flex flex-col rounded-lg cursor-pointer h-12 items-center justify-center `}
                  onClick={() => handleTipsAmount(30)}
                >
                  <div className="flex items-center justify-center px-3 gap-1">
                    <img
                      src="https://em-content.zobj.net/source/apple/391/star-struck_1f929.png"
                      alt="star-struck_1f929.png"
                      className="h-[20px]"
                    />
                    ₹30
                  </div>
                  <p className="text-[8px] font-semibold text-custom-purple">
                    MOST TIPPED
                  </p>
                </div>
                <div
                  className={`${
                    tipsAmount === 50 &&
                    "border-custom-purple bg-custom-purple/10"
                  } border flex items-center justify-center gap-1 rounded-lg cursor-pointer h-12 `}
                  onClick={() => handleTipsAmount(50)}
                >
                  <div className="flex items-center justify-center px-3 gap-1">
                    <img
                      src="https://em-content.zobj.net/source/apple/391/smiling-face-with-heart-eyes_1f60d.png"
                      alt="smiling-face-with-heart-eyes_1f60d.png"
                      className="h-[20px]"
                    />
                    <h1>₹50</h1>
                  </div>
                </div>
                <div
                  className={`${
                    ![10, 30, 50].includes(tipsAmount) &&
                    tipsAmount !== 0 &&
                    "border-custom-purple bg-custom-purple/10"
                  } border flex gap-1 rounded-lg cursor-pointer h-12 items-center`}
                  onClick={() => dispatch(showCustom())}
                >
                  <div className="flex items-center justify-center px-3 gap-1">
                    <img
                      src="https://em-content.zobj.net/source/apple/391/clapping-hands_1f44f.png"
                      alt="clapping-hands_1f44f.png"
                      className="h-[20px]"
                    />
                    <h1>Custom</h1>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex gap-2 items-center justify-between text-[13px] font-semibold text-gray-700">
              <div
                className={`${
                  isCustom && "border-custom-purple bg-custom-purple/10"
                } border flex gap-1 rounded-lg cursor-pointer h-12 items-center`}
                onClick={() => dispatch(hideCustom())}
              >
                <div className="flex items-center justify-center px-3 gap-1">
                  <img
                    src="https://em-content.zobj.net/source/apple/391/clapping-hands_1f44f.png"
                    alt="clapping-hands_1f44f.png"
                    className="h-[20px]"
                  />
                  <h1>Custom</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="border-b">
                  <input
                    type="number"
                    value={customTip}
                    placeholder="Enter tips"
                    onChange={handleChange}
                    className="w-full outline-none h-[15px] text-xs"
                  />
                </div>
                <p className="text-[9px] text-red-400 h-[11px]">{error}</p>
              </div>

              <div>
                {customTip >= 10 ? (
                  <button
                    className="text-custom-purple w-[50px]"
                    onClick={handleCustomTip}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="w-[50px]"
                    onClick={() => dispatch(hideCustom())}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TipsController;
